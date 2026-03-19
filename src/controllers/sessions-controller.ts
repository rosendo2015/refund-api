import { Request, Response } from "express"
class SessionsController {
    async create(request: Response, response: Response) {
        return response.json({ message: "ok" })
    }
}
export { SessionsController }
