import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const isObjectIdValid = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ data: { error: 'Invalid ID' } });
  }
  return next();
};

export const methodNotAllowed = (req, res) => {
  return res.status(405).end();
};
