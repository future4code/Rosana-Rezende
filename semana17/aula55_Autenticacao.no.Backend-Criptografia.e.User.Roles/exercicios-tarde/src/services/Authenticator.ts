import * as jwt from "jsonwebtoken"

export class Authenticator {

    // private static EXPIRES_IN = "1min";

    private static getExpiresIn(): number {
        return Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
    }

    public generateToken(id: string): string {
        const token = jwt.sign(
            {
                id
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
        };
        return result;
    };

}

interface AuthenticationData {
    id: string;
}