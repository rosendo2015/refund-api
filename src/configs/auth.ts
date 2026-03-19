import { env } from "@/env"
export const authConfig = {
    jwt: {
        secret: process.env.JWT_SECRET || "rosendo",
        expiresIn: "1d",
    },
}