import dbConnect from "@/lib/dbConnect";
import Client from "@/models/Client";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const client = await Client.create(req.body);
        res.status(200).json({ success: true, client });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
