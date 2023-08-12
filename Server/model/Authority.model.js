const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const AuthoritySchema = Schema(
  {
    name: { type: String },
    serial_number: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret.password;
      },
    },
  }
);

AuthoritySchema.pre("save", async function (next) {
  let user = this;
  console.log(this);
  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);

  if (user.password) {
    const hash =  bcrypt.hashSync(user.password, salt);

    user.password = hash;
  }
  // console.log(user.password);
  // user.addOne()

  return next();
});

AuthoritySchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  // console.log(bcrypt.hashSync(user.password,));
  if (user.password) {
    // console.log(bcrypt.compareSync(candidatePassword,user.password).catch((e)=>false));
    try{
      const isMatch=await bcrypt.compare(candidatePassword, user.password);
    
      if (isMatch) {
        console.log('Password matches! User is authenticated.');
        return true;
      } else {
        console.log('Password does not match. Authentication failed.');
        return false; 
      }
    } catch (error) {
      console.error(error);
      return false;
    }
    
  
  }
  return false;
};

const AuthorityModel = model("Authority", AuthoritySchema);

module.exports = AuthorityModel;
