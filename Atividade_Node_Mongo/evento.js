const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    data_inicio: Date,
    data_fim: Date,
    local: String,
    participantes: [String]
}, { timestamps: true });

const Evento = mongoose.model("Evento", EventoSchema);
module.exports = Evento;