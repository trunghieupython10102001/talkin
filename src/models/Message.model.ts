import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const messageSchema = new Schema(
  {
    senderId: {
      type: Types.ObjectId,
      ref: 'User',
    },
    recipientId: {
      type: Types.ObjectId,
      ref: 'User',
    },
    content: String,
    attachments: [String],
    readBy: [
      {
        userId: Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Message = model('Message', messageSchema);

export default Message;
