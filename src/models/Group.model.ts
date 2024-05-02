import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const groupSchema = new Schema(
  {
    name: String,
    description: String,
    ownerId: {
      type: Types.ObjectId,
      ref: 'User',
    },
    members: [
      {
        userId: Types.ObjectId,
        role: String,
        joinedAt: Date,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Group = model('Group', groupSchema);

export default Group;
