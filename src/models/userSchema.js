const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    email: { 
        type: String, 
        unique: true,
        trim: true,
        require: true
    },
    password: { 
        type: String, 
        require: true
    },
    username: { 
        type: String, 
        require: true,
        trim: true
    },
    surname: { 
      type: String, 
      require: true,
      trim: true
  },
    rol: { 
        type: String, 
        require: true,
        trim: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.methods.encryptPassword = async password => {
  const salt =  await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}


module.exports = mongoose.model("UserModel", UserSchema);
