var express = require('express');
var app = express();
var fs= require('fs');
var bodyParser = require('body-parser')
const path = require('path')
var  urlencoded = bodyParser.urlencoded({extended:false});
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine' , 'ejs');
app.use('/assets' ,express.static('assets'));
app.get('/pageH', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/index.html'))
})
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::Inscription///////////////////////////////////////
// app.get('/page5', (req, res) => {
//     // res.sendFile(path.resolve(__dirname, 'pages/page1.ejs'))
//     res.redirect('/inscription');
// });
var arr=[];
app.get('/inscription',(req,res)=>{
    var db=fs.readFileSync('./data/User.json');
arr=JSON.parse(db);
res.render('page5',{arr});
});
app.post('/in',(req,res)=>{
    arr.push({"nom":req.body.Name,"Phone":req.body.Phone,"Email":req.body.EMail,"mots pass":req.body.mot,"pays":req.body.Country});
fs.writeFile('./data/User.json',JSON.stringify(arr,null,5),(err)=>{
    console.log(err);
});
res.redirect('/inscription');
});
///////////////////////////////////////////////reservation////////////////::::::://///////////////////////////////////
app.get('/Page1', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/page1.ejs'))
    res.redirect('/reservation1');
});
var list=[];
app.get('/reservation1',(req,res)=>{
    var wd=fs.readFileSync('./data/reservation1.json');
list=JSON.parse(wd);
res.render('pages/Page1',{list});
});
// Ajouter Département  //
app.post('/op',(req,res)=>{
    list.push({"nom":req.body.nom,"id":list.length +1,"Phone":req.body.Phone,"Email":req.body.email,"cars":req.body.cars,"DF":req.body.DF});
fs.writeFile('./data/reservation1.json',JSON.stringify(list,null,5),(err)=>{
    console.log(err);
});
res.redirect('/reservation1');
});
////////////////////////////////////remove
app.get('/delete/:id',(req,res)=>{
    list= list.filter(d => d.id!=req.params.id);
    const data =JSON.stringify(list,null,2);
    fs.writeFileSync('data/reservation1.json',data,'utf-8');
    res.redirect('/reservation1')
})
///////////////////////////////////Update
// app.post('/up', (req, res) => {
//     console.log(req.body, req.params)
//     const { id } = req.body;
//     const { nom, email, Phone,DF  } = req.body;
  
//     list.forEach((product, i) => {
//       if (product.id == id) {
//         list[i].nom = nom;
//         list[i].email = email;
//         list[i].Phone = Phone;
//         list[i].DF = DF;
       
//       }
//     });
//     res.redirect('/reservation1');
//   });


// app.get('/up/:id', (req, res) => {
//     fs.writeFileSync('data/reservation1.json',list,'utf-8');
//     res.redirect('/reservation1')
//   res.render('u', {list})
// });
app.get('/up/:id', (req, res) => {
    let editid = req.params.id
    res.render('up', {list, editid})
  });
app.put('/reservation1',(req,res)=>{

    list.push({
      
      "ID":list.length +1,    
      "Name": req.body.nom,
      "Prenom": req.body.Prenom,
      "Email": req.body.email,
      "Phone": req.body.Phone,
      "cars": req.body.cars,
     
  });
    const data = JSON.stringify(list, null, 2)
    fs.writeFileSync('data/reservation.json', data, 'utf-8')
    res.redirect('/reservation1')
  });
  
  
  app.post('/up', (req, res) => {
    
    console.log(req.body, req.params)
    const { id } = req.body;
    const { nom, email, Phone, cars, } = req.body;
  
    list.forEach((element, i) => {
        if (list[i].id == id) {
            list[i].nom= nom;
           
            list[i].email= email;
            list[i].Phone = Phone;
            list[i].cars= cars;
        }
    });
    let data8 = JSON.stringify(list, null, 2);
    fs.writeFileSync('data/reservation1.json', data8, 'utf-8');
    res.redirect('/reservation1')
  });
app.listen(9999);
console.log("best server");