const connect = require('./db');

async function main() {
    const db = await connect();
    const eventos = db.collection("eventos");

    const novoEvento = {
        titulo: "Reunião de planejamento",
        descricao: "Definir metas do trimestre",
        data_inicio: new Date("2025-06-03T09:30:00Z"),
        data_fim: new Date("2025-06-03T11:00:00Z"),
        local: "Sala de conferências",
        participantes: ["teste@email.com", "teste@email.com"]
    };

    await eventos.insertOne(novoEvento);
    console.log("Evento inserido com sucesso!");

    const listaEventos = await eventos.find().toArray();
    console.log("📅 Eventos cadastrados:", listaEventos);
}

main(); 