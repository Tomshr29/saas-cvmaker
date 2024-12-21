import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

export function LayoutAccount(props: Props) {
  const { children } = props;

  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
}
