const mongoose=require('mongoose');
const validator = require('validator');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A user must have a name"]
    },
    age:{
        type:Number,
        min:[18,'Age should be greater than 18']
    },
    Email:{
            type: String,
            unique:[true,"Email already exists"],
            required: [true, "Email required"],
            validate: [ validator.isEmail, 'invalid email' ]
    },

    Gender:{
           type:String,
           enum:{
             values:['male','female','others'],
             message:"Gender is either:male,female,others"
           }
    },
    Mobile:{
        type:String,
        // required:[true,"A user must have mobile number"],
    
        validate: {
            validator: function(val) {
                return val.toString().length === 10
            },
            message:`Mobile number must have exactly 10 digits`
        }
    },
    Birthday:{
        type: Date,
        validate:{
            validator:function(val){
                return val.toLocaleDateString('en-GB').match(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/);
            },
            message:"Date format is not correct"
        },

    },
    City:{
        type:String,
        default:"Noida"
    },
    State:{
        type:String,
        default:"Uttar Pradesh"
    },
    Country:{
        type:String,
        default:"India"
    },
    Address1:{
        type:String
    },
    Address2:{
        type:String
    }
});
const User=mongoose.model('User',userSchema);

module.exports=User;