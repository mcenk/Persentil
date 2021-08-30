const express = require('express');
const app= express()
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const port = 3000
const hostname= '127.0.0.1'

// const fileUpload = require('express-fileupload');
// const generateDate= require('./helpers/generateDate').generateDate

// mongoose.connect('mongodb://localhost:27017/deneme', {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useCreateIndex:true
// });

// app.use(fileUpload())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    // helpers: {generateDate:generateDate}
}));

app.set('view engine', 'handlebars');


const main= require('./routes/main')
app.use('/',main)


app.listen(port,hostname, ()=>{

    console.log(`Server Aktif, http://${hostname}: ${port} dinleniyor`)
    })     


