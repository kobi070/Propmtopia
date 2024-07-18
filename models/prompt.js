import { Schema, model, models } from "mongoose";

const PropmtSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    },
});

const Propmt = models.Propmt || model('Propmt', PropmtSchema);

export default Propmt;