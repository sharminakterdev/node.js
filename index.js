import express from "express"
import cors from'cors';
const app= express();
const PORT= process.env.PORT||5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{

res.send('users are comming soon')

});
const users =[
    {id:1 ,name: "Mim",email:'mim@gmail.com'},
    {id:2 ,name: "Shahida",email:'shahida@gmail.com'},
    {id:3 ,name: "Humayra",email:'humayra@gmail.com'},
    {id:4 ,name: "Anika",email:'anika@gmail.com'},

]
app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('data from client',req.body)
    const newUser=req.body
    newUser.id=users.length+1;
    users.push(newUser)
    res.send({success:true,message:'User added successfully'});
})

app.listen(PORT,()=>[
    console.log(`Server is running on port ${PORT}`)


]

)
