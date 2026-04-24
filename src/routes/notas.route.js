const express = require('express');
const router = express.Router();
const controller = require('../controllers/notas.controller');

router.get('/notas', controller.getNotas);
router.post('/notas', controller.updateNotas);

/**
 * @swagger
 * /notas:
 *   get:
 *     summary: Obtener notas de un estudiante
 *     tags: [Notas]
 *     parameters:
 *       - in: query
 *         name: alumno_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del alumno
 *     responses:
 *       200:
 *         description: Lista de notas
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 alumno_id: 1
 *                 materia: "Matematicas"
 *                 nota1: "4.00"
 *                 nota2: "3.50"
 *                 nota3: "4.20"
 *                 nota4: "3.80"
 */
router.get('/notas', controller.getNotas);

/**
 * @swagger
 * /notas:
 *   put:
 *     summary: Actualizar notas de un estudiante
 *     description: Actualiza las notas (nota1, nota2, nota3, nota4) de un estudiante mediante su ID
 *     tags: [Notas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - alumno_id
 *             properties:
 *               alumno_id:
 *                 type: integer
 *                 example: 1
 *               nota1:
 *                 type: number
 *                 example: 4.5
 *               nota2:
 *                 type: number
 *                 example: 3.8
 *               nota3:
 *                 type: number
 *                 example: 4.2
 *               nota4:
 *                 type: number
 *                 example: 3.9
 *     responses:
 *       200:
 *         description: Notas actualizadas correctamente
 *         content:
 *           application/json:
 *             example:
 *               mensaje: "Notas actualizadas correctamente"
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Estudiante no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/notas', controller.updateNotas);

module.exports = router;


