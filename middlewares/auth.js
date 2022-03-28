import { getSession } from "next-auth/react";

const isAuthorizedUser = async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized",
    });
  }

  next();
};

export { isAuthorizedUser };
