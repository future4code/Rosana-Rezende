import * as jwt from "jsonwebtoken"

export class Authenticator {
    // private static EXPIRES_IN = "1min";

    private static getExpiresIn(): number {
        return Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
    }

    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            // input
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            {
                // expiresIn: Authenticator.EXPIRES_IN,
                expiresIn: Authenticator.getExpiresIn()
            }
        )
        return token
    }

    public verify(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    };

}

interface AuthenticationData {
    id: string, 
    role: string
}