import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface PayLoad {
    sub: string
}

export function autenticado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization
    console.log(authToken)


    if (!authToken) {
        return res.json({ dados: 'Token Inválido' })
    }


    const [, token] = authToken.split(' ')

    try {
        const { sub } = verify(
            token,
            process.env.AUTH_TOKEN
        ) as PayLoad
        req.user_id = sub
        return next()

    } catch (err) {
        return res.json({ dados: 'Token Inválido' })
    }
}