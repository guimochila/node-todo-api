import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const isObjectIdValid = id => {
  if (!ObjectId.isValid(id)) {
    throw new Error('ObjectID is not valid');
  }

  return id;
};

export const methodNotAllowed = (req, res) => {
  return res.status(405).end();
};
