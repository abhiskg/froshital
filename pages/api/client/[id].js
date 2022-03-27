import dbConnect from "@/lib/dbConnect";
import Client from "@/models/Client";

async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "PUT":
      try {
        const client = await Client.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!client) {
          return res.status(404).json({
            success: false,
            error: "Client not found",
          });
        }

        res.status(200).json({ success: true, client });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "DELETE":
      try {
        const client = await Client.deleteOne({ _id: id });

        if (!client) {
          return res.status(404).json({
            success: false,
            error: "Client not found",
          });
        }

        res.status(200).json({ success: true, message: "Client deleted" });
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
