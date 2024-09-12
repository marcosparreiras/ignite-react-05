import Strip from "stripe";

export const stripe = new Strip(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Ignite Shop",
  },
});
