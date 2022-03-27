import dbConnect from "@/lib/dbConnect";
import Client from "@/models/Client";

async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const clients = await Client.find({}).sort({ date: -1 });
        res.status(200).json({ success: true, clients });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default handler;
