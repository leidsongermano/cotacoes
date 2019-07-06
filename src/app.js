const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Universidade CPFL',
        author: 'Gabriel'
    });
})
app.get('/biblioteca', (req, res) => {
    res.render('biblioteca', {
        title: 'Universidade CPFL',
        author: 'Gabriel'
    });
})

app.get('/home', (req, res) => { 
    res.render('home', {
        title: 'Universidade CPFL'
    });
})

app.get('/treino', (req, res) => {
    res.render('treino', {
        title: 'Treinamento',
        author: 'Hackathon Team'
    });
})

app.get('/perfil', (req, res) => {
    res.render('perfil', {
        title: 'perfil',
        author: 'Hackathon Team'
    });
})

app.get('/perguntas', (req, res) => {
    res.render('perguntas', {
        title: 'perguntas',
        author: 'Hackathon Team'
    });
})


app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        author: 'Hackathon Team'
    });
})


// app.get(‘/dalembert’, callD_alembert);
// function callD_alembert(req, res) {
//   // using spawn instead of exec, prefer a stream over a buffer
//   // to avoid maxBuffer issue
//   var spawn = require(“child_process”).spawn;
//   var process = spawn(‘python’, [“./machine_learning.py”,
//     req.query.funds, // starting funds
//     req.query.size, // (initial) wager size
//     req.query.count, // wager count — number of wagers per sim
//     req.query.sims // number of simulations
//   ]);
//   process.stdout.on(‘data’, function (data) {
//     res.send(data.toString());
//   });
// }

console.log('a')

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server up ${port}`);
})