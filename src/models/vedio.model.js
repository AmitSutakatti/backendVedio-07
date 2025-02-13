import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const vedioSchema=new Schema({
vedioFile:{
    type:String,//cloudinary url
    required:true,

},
thumbnail:{
    type:String,
    required:true,
},
tittle:{
    type:String,
    required:true,
},
discription:{
    type:String,
    required:true,
},
duration:{
    type:Number,
    required:true,
},
views:{
    type:Number,
    default:0,
},
isPubblished:{
    type:Boolean,
    default:true,
},
owner:{
type:Schema.Types.ObjectId,
ref:"User",
}
},{
    timestamps:true ,
})
vedioSchema.plugin(mongooseAggregatePaginate)
export const Vedio=mongoose.model("Vedio",vedioSchema)