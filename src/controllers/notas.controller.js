const notasService = require('../services/notas.service');

async function getNotas(req, res){
    try {
        const {alumno_id} = req.query;

        const notas = await notasService.getNotas({ alumno_id });

        res.json(notas);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "Error interno"});
    }
}

async function updateNotas(req, res) {
    try {
        const { nota1, nota2, nota3, nota4, alumno_id } = req.body;

        const updateNotas = await notasService.updateNotas({
            nota1,
            nota2,
            nota3,
            nota4,
            alumno_id
        });

        res.status(201).json(updateNotas);
    } catch(error) {
        res.status(500).json({error: "Error al cargar notas"});
    }
}

module.exports = { getNotas, updateNotas }