const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const app = require('./app');
const mongoose=require('mongoose');

const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    autoIndex: true,
}).then(con=>{
    console.log('connedted to remote DB');
});



const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("App running on port")
});