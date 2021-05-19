import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import { generateWebToken } from '../utils/auth.js'

// // @route    POST api/users/login
// // @desc     Authintecate users
// // @access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateWebToken(user._id),
      })
    } 
    else {
      res.status(401)
      throw new Error('Invalid email or password.')
    }
  } catch (error) {
    throw new Error(error)
  }
})

// // @route    POST api/users/register
// // @desc     Register user
// // @access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User Already Exists.')
  }
  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateWebToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data.')
  }
})

export { authUser, registerUser }
