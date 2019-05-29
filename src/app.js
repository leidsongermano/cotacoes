const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const cotacoes = require('./util/cotacao');

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Sistema de cotações',
        author: 'Gabriel'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Ajuda'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sobre',
        author: 'Gabriel'
    });
})


app.get('/cotacoes', (req, res) => {

    if(!req.query.ativo) {

        const error = {
            message : 'O ativo precisa ser inserido',
            code: 400
        }
        return res.status(400).json(error)

    }
    else {
    const symbol = req.query.ativo.toUpperCase();

    cotacoes(symbol, (error, data) => {
        if (error)
        {
            return res.status(error.code).json(error)
        }
        else
        {
            return res.status(200).json(data)
        }
        })
    }
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404 do help',
        author: 'Gabriel'
    });
})

app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        author: 'Gabriel'
    });
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server up ${port}`);
})