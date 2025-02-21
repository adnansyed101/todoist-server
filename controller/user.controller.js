import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  const user = req.body;
  const fireId = req.params.fireId;

  const isExist = await User.findOne({ fireId: fireId });

  if (isExist) {
    return res
      .status(202)
      .json({ success: false, message: "User Already Exists in database" });
  }

  if (!user.email || !user.image || !user.name || !user.fireId) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.log("Error in creating user: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
