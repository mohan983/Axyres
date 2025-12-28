import bcrypt from "bcrypt"
import User from "../models/userModel.js"

export const addUser = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email & password required" });
    }
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Failure: User exists" })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      email,
      password: hashedPassword,
      type: "free user"
    })
    await newUser.save()
    return res.json({ success: true, message: "Registered Successfully" })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ success: false, message: "Registration Failed" })
  }
}

export const getUser = async (req, res) => {
  try {
    const emailParam = req.query.email
    const userData = await User.findOne(
      { email: emailParam },
      { password: 0 } // hide password
    );
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, user: userData });
  } catch (err) {
    console.error(err)
    return res.status(500).json({ success: false, message: "Error fetching user" })
  }
}
