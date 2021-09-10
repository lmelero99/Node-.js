const express = require('express');
/*const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'secret';*/
const disney = require('./db.json');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const auth = express.Router()
app.use('/auth', auth)

usuario = []

/*Autenticacion

app.get('/', (req, res) => {
    res.send('¡Bienvenido al maravilloso mundo de Disney!');
});

auth.post('/register', (req, res) => {
    try {
        let user = req.body;
        user.password = createHash(user.password);
        usuario.push(user);
        res.send({ token: generateToken(user) });
    } catch (error) {
        res.status(400).send(error);
    }
});

auth.post('/login', (req, res) => {
    let user = usuario.find(user => user.username === req.body.username);

    if (!user) {
        return res.status(400).send('El usuario no fue encontrado. Por favor, probá con otro nombre');
    }

    if (!isValidPassword(user, req.body.password)) {
        return res.status(400).send('El usuario o la contraseña no son válidos.');
    }

    res.send({ token: generateToken(user) });
});

app.get('/token', checkAuthentication, (req, res) => {
    res.send('<h1 style="color:red">DATOS SENSIBLES</h1>');
});

function checkAuthentication(req, res, next) {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).send('Se debe ingresar el token.');
    }

    jwt.verify(token, secret, (err, value) => {
        if (err) return res.status(500).send('Falló el token.');

        req.user = value;
        next();
    });
}

const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
}

function generateToken(user) {
    return jwt.sign({ data: user }, secret, { expiresIn: '1 hora' });
}

const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(60), null);
}

/* Listado */

app.get('/characters', (req, res) => {
    var personajes = disney.Personajes
    console.log(personajes)
})/*

app.get('/movies', (req, res) => {
    
})*/

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en http://localhost:${PORT}`)
});