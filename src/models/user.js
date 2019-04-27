import { model, Schema } from 'mongoose';
import { isEmail } from 'validator';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Invalid email address. Please provide a valid email.'],
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('User', userSchema);

// UserSchema.methods.toJSON = function() {
//   const user = this;
//   const userObject = user.toObject();

//   return _.pick(userObject, ['_id', 'email']);
// };

// UserSchema.methods.generateAuthToken = function() {
//   const user = this;
//   const access = 'auth';
//   const token = jwt
//     .sign(
//       {
//         _id: user._id.toHexString(),
//         access,
//       },
//       process.env.JWT_SECRET,
//     )
//     .toString();

//   user.tokens.push({
//     access,
//     token,
//   });

//   return user.save().then(() => token);
// };

// UserSchema.methods.removeToken = function(token) {
//   const user = this;

//   return user.update({
//     $pull: {
//       tokens: { token },
//     },
//   });
// };

// UserSchema.statics.findByToken = function(token) {
//   const User = this;
//   let decoded;

//   try {
//     decoded = jwt.verify(token, process.env.JWT_SECRET);
//   } catch (e) {
//     return Promise.reject();
//   }

//   return User.findOne({
//     _id: decoded._id,
//     'tokens.token': token,
//     'tokens.access': 'auth',
//   });
// };

// UserSchema.statics.findByCredentials = function(email, password) {
//   const User = this;

//   return User.findOne({
//     email,
//   }).then(user => {
//     if (!user) {
//       return Promise.reject();
//     }

//     return new Promise((resolve, reject) => {
//       bcrypt.compare(password, user.password, (err, res) => {
//         if (res) {
//           resolve(user);
//         } else {
//           reject();
//         }
//       });
//     });
//   });
// };

// UserSchema.pre('save', function(next) {
//   const user = this;

//   if (user.isModified('password')) {
//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(user.password, salt, (err, hash) => {
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });

// const User = mongoose.model('User', UserSchema);

// module.exports = {
//   User,
// };
