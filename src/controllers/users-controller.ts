import { Request, Response } from "express"
import { UserRule } from "@/generated/prisma/client"
import z from "zod"

class UsersController {
    async create(request: Request, response: Response) {
        const bodyschema = z.object({
            name: z.string().trim().min(3, { message: "Nome é obrigatório" }),
            email: z.string().trim().email({ message: "Email inválido" }).toLowerCase(),
            password: z.string().min(6, { message: "A senha de pelo menos 6 números" }),
            role: z.enum([UserRule.employee, UserRule.manager]).default(UserRule.employee)
        })
        const { name, email, password, role } = bodyschema.parse(request.body)
        return response.json({ name, email, password, role })
    }
}
export { UsersController }