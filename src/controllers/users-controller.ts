import { Request, Response } from "express"

class UsersController {
    async create(request: Request, response: Response) {
        return response.json({ message: "Usuário criado com sucesso" })
    }
}
export { UsersController }