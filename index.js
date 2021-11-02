const express = require('express')
const app = express()
const db = require('./config').firestore()



app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.set('view engine','ejs')

app.use('views',express.static(__dirname+'/views'))
app.use('/',express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    
    res.render('index');
})

app.post('/',(req,res)=>{
    try{
        db.collection('form').doc(req.body.email).set(req.body)
        res.redirect('/#success')

        
    }catch(err){

        if(!err){
            res.send(err)
        }
        res.redirect('/#Error')
    }
  
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.listen(process.env.PORT||3000,()=>{console.log("Running")})