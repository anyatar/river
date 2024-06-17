import mongoose, { Document, Schema } from 'mongoose';

export interface IRecording extends Document {

}

const RecordingSchema: Schema = new Schema({
  
});

export default mongoose.model<IRecording>('Recording', RecordingSchema);
