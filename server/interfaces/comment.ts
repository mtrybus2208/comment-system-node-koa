import { Document, Schema } from 'mongoose';

export default interface Schema extends Document {
  id: string;
  name: string;
  slug: string;
  text: string;
}
