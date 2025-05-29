const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static('public'));


class Jogadores {
    constructor(filePath) {
        this.filePath = filePath;
    }

    lerJogadores() {
        try {
            if (!fs.existsSync(this.filePath)) {
                console.error("Arquivo de jogadores não encontrado:", this.filePath);
                return [];
            }
            const data = fs.readFileSync(this.filePath, 'utf8');
            return data.split('\n').map(nome => nome.trim()).filter(nome => nome).sort();
        } catch (error) {
            console.error("Erro ao ler o arquivo de jogadores:", error);
            return [];
        }
    }

    topCinco() {
        return this.lerJogadores().slice(0, 5);
    }
}


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index_pt.html','index_pt.html'));
});


app.get('/jogadores', (req, res) => {
    const jogadores = new Jogadores(path.join(__dirname, 'usuarios.txt'));
    const listaJogadores = jogadores.topCinco()
        .map(nome => `<li>${nome}</li>`)
        .join('');

    const paginaHTML = `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <title>Jogadores</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Top 5 Jogadores</h1>
        <ul>${listaJogadores}</ul>
        <a href="/">Voltar ao início</a>
    </body>
    </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.send(paginaHTML);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});