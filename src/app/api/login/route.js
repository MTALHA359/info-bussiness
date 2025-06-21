import { dbConnect } from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

// Optional: define a login log schema
const loginLogSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  email: String,
  loginTime: Date,
});
const LoginLog = mongoose.models.LoginLog || mongoose.model('LoginLog', loginLogSchema);

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // ✅ Log successful login
  await LoginLog.create({
    userId: user._id,
    email: user.email,
    loginTime: new Date(),
  });

  return Response.json({ message: 'Login successful', user });
}
