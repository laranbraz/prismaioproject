const { Router } = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const router = Router();

router.post("/usuario", async (req, res) => {
    const { cpf, nome_completo, data_nascimento, email_pessoal, email_funcional, matricula, contato, unidadeID, cargoID } = req.body;

    const usuario = await prisma.user.create({
        data: {
            cpf,
            nome_completo,
            data_nascimento,
            email_pessoal,
            email_funcional,
            matricula,
            contato,
            unidadeID,
            cargoID
        },
    });

    return res.json(usuario);
});

module.exports = { router };