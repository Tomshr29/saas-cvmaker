import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

function AddResume() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, setData, post, processing, errors } = useForm({
    title: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    post("/add-user-resume", {
      onSuccess: () => {
        setIsOpen(false);
      },
    });
  }

  return (
    <div>
      {/* Trigger Button */}
      <div
        className="flex h-60 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-indigo-600 bg-indigo-50 p-14 py-24 transition-all hover:scale-105 hover:shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Plus size={36} className="text-indigo-600" />
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <form onSubmit={submit} className="w-full max-w-lg">
            <DialogPanel className="rounded bg-white p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <DialogTitle className="scale-y-95 text-2xl font-medium tracking-tight text-gray-800 antialiased">
                  Create New Resume
                </DialogTitle>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <X size={24} />
                </button>
              </div>

              <Description className="scale-y-95 text-lg tracking-tight text-gray-600 antialiased">
                <p>Give a title to your new resume.</p>
              </Description>

              {/* Resume Title Input */}
              <div className="my-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Resume Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                  className="mt-2 w-full rounded-md border border-gray-300 p-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter a title for your resume"
                  autoComplete="off"
                />
                {errors.title && (
                  <div className="mt-2 text-sm text-red-600">
                    {errors.title}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <Button type="submit" variant="secondary" disabled={processing}>
                  {processing ? "Creating..." : "Create"}
                </Button>
              </div>
            </DialogPanel>
          </form>
        </div>
      </Dialog>
    </div>
  );
}

export default AddResume;
