const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:{
    type:String,
    require:true,
    min:3,
    max:20,
    }},
   { email:{ type:String,
        require:true,
        unique:true,
        max:20}},
      
   { password:{ type:String,
        require:true,
        
        min:3}},
        { profilePicture:{ type:String,
           default:"",
            }},
            {coverPicture:{ type:String,
             default:"",
                }},
                {followers:{ type:Array,
                    default:[],}},
            {followings:{ type:Array,
                default:[],
            },
            isAdmin:{type:Boolean,
            default:false},
            },
            {timestamps:true});

            module.exports("user",UserSchema)
            
