require("dotenv").config()
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import cors from "cors"
import { router } from "./router"
import path from 'path'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: "Error",
        message: "Erro interno do servidor"
    })
})

app.listen(5555, () => console.log("Servidor iniciado na porta 5555"))

//Iniciar TS = yarn tsc --init