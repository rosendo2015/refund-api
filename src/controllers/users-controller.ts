import { Request, Response } from "express"
import { UserRule } from "@/generated/prisma/client"
import { prisma } from "@/database/prisma"
import z from "zod"
import { hash } from "bcrypt"
import { AppError } from "@/utils/AppError"

class UsersController {
    async create(request: Request, response: Response) {
        const bodySchema = z.object({
            name: z.string().min(3, { message: "Nome é obrigatório" }).trim(),
            email: z.string().trim().email({ message: "Email inválido" }).toLowerCase(),
            password: z.string().min(6, { message: "A senha de pelo menos 6 números" }),
            role: z.enum([UserRule.employee, UserRule.manager]).default(UserRule.employee)
        })
        const { name, email, password, role } = bodySchema.parse(request.body)

        const userWithSameEmail = await prisma.user.findFirst({ where: { email } })
        if (userWithSameEmail) {
            throw new AppError("Email já cadastrado.")
        }

        const hashedPassword = await hash(password, 8)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        })

        return response.status(201).json()
    }
}
export { UsersController }