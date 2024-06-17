import mongoose, { Document, Schema } from 'mongoose';

export interface ITake extends Document {

}

const TakeSchema: Schema = new Schema({

});

export default mongoose.model<ITake>('Take', TakeSchema);
