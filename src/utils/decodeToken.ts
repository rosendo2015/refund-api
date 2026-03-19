import { verify } from "jsonwebtoken"
import { AppError } from "./AppError"
import { authConfig } from "@/configs/auth"

export interface TokenPayload {
    sub: string;
    role: string;
}

export function decodeToken(token: string): TokenPayload {
    const decoded = verify(token, authConfig.jwt.secret);

    if (typeof decoded === "string" || !decoded) {
        throw new AppError("invalid JWT token", 401)
    }

    const payload = decoded as TokenPayload

    if (!payload.sub || !payload.role) {
        throw new AppError("invalid JWT payload", 401)
    }

    return payload;
}