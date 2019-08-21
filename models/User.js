import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema ({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  videos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
  },
});

UserSchema.plugin (passportLocalMongoose, {usernameFeild: 'email'});

const model = mongoose.model ('User', UserSchema);

export default model;
