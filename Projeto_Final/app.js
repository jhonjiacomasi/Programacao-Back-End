const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'loja-primo-secret-key-2024',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
        maxAge: 24 * 60 * 60 * 1000 
    }
}));

const requireAuth = (req, res, next) => {
    if (req.session && req.session.userId) {
        return next();
    } else {
        return res.status(401).json({ error: 'Não autorizado' });
    }
};

const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

app.use('/api/auth', authRoutes);
app.use('/api/protected', requireAuth, protectedRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/ecommerce', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ecommerce.html'));
});

app.get('/api/check-auth', (req, res) => {
    if (req.session && req.session.userId) {
        res.json({ 
            authenticated: true, 
            user: { 
                id: req.session.userId, 
                username: req.session.username 
            } 
        });
    } else {
        res.json({ authenticated: false });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});

module.exports = app;

