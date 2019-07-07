const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["/public/py/machine_learning.py", 0,1,1]);

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

// app.get('/machine_learning', (req,res) => {
//     pythonProcess.stdout.on('data', (data) => {
//         console.log(data)
//     });
// })


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server up ${port}`);
})