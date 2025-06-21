import { dbConnect } from '@/lib/dbConnect';
import Contact from '@/models/Contact';

export async function POST(req) {
  await dbConnect();

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required' }, { status: 400 });
  }

  const saved = await Contact.create({ name, email, message });

  return Response.json({ message: 'Message received', data: saved });
}

