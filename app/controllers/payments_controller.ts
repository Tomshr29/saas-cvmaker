import type { HttpContext } from "@adonisjs/core/http";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-10-28.acacia",
});

export default class PaymentsController {
  public async subscribe({ auth, response }: HttpContext) {
    const user = auth.user;

    if (!user) {
      return response
        .status(401)
        .send({ error: "Utilisateur non authentifié" });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "CV Premium",
              },
              unit_amount: 500,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `http://localhost:3333/success`,
        cancel_url: `http://localhost:3333`,
      });

      response.status(409).header("X-Inertia-Location", session.url!);
    } catch (error) {
      return response.status(500).send({
        error: "Erreur lors de la création de la session de paiement.",
      });
    }
  }
}
