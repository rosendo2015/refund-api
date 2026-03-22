import { AppError } from "@/utils/AppError"
import { Request, Response } from "express"
import z, { ZodError } from "zod"
import uploadConfig from "@/configs/upload"
import { DiskStorage } from "@/providers/disk-storage"


class UploadsController {
    async create(request: Request, response: Response) {
        const diskStorage = new DiskStorage()
        try {
            const fileSchema = z.object({
                filename: z.string().min(1, "Arquivo obrigatório"),
                mimetype: z.string().refine((type) => uploadConfig.ACCEPTED_IMAGE_TYPES.includes(type), `Formatos permitidos: ${uploadConfig.ACCEPTED_IMAGE_TYPES}`),
                size: z.number().positive().refine((size) => size <= uploadConfig.MAX_FILE_SIZE, `Tamanho máximo permitido: ${uploadConfig.MAX_SIZE}`)
            }).passthrough()

            const file = fileSchema.parse(request.file)
            const filename = await diskStorage.saveFile(file.filename)

            response.json({ message: `Arquivo enviado com sucesso! ${filename}` })
        } catch (error) {
            if (error instanceof ZodError) {
                if (request.file) {
                    await diskStorage.deleteFile(request.file.filename, "tmp")
                }
                throw new AppError(error.issues[0].message)
            }
            throw error

        }
    }
}
export { UploadsController }