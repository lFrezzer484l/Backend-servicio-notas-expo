const pool = require('../db/connection');

async function getNotas({ alumno_id }) {
    const query = `SELECT * FROM notas WHERE alumno_id = $1`;

    const result = await pool.query(query, [alumno_id]);

    return result.rows;
}

async function updateNotas({ nota1, nota2, nota3, nota4, alumno_id}) {
    const query = `UPDATE notas
                   SET nota1 = $1, 
                       nota2 = $2, 
                       nota3 = $3, 
                       nota4 = $4 
                   WHERE alumno_id = $5
                   RETURNING *;
                   `;
                   
    const valuesNotas = [nota1, nota2, nota3, nota4, alumno_id];
    const notasResult = await pool.query(query,valuesNotas);

    return notasResult.rows[0] || null;
                   
}

module.exports = { getNotas, updateNotas }