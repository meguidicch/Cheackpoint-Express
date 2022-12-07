const express = require ('express')
const app =express()
const port =3000


const Middleware =(req,res,next)=>{

const currentDate = new Date();
const currentHour = currentDate.getHours();
const currentday = currentDate.getDay();

if(currentday == 0 || currentday == 6 || currentHour>17 || currentHour<9){
    return res.sendFile(__dirname+'/public/Error.html')
}

    return next()
}

app.use(Middleware)

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/Homepage.html')
})

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/public/style.css')
  })

app.get('/services',(req,res)=>{
    res.sendFile(__dirname+'/public/Ourservices.html')
})


app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/Contactus.html')
})


app.listen(port,console.log('server is running'))