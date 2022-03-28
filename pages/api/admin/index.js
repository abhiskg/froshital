import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const admin = await Admin.create(req.body);
        res.status(200).json({ success: true, admin });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
