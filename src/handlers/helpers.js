import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const isObjectIdValid = id => {
  if (!ObjectId.isValid(id)) {
    throw new Error('ObjectID is not valid');
  }

  return id;
};

export default isObjectIdValid;
