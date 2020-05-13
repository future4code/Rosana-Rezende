import * as bcrypt from "bcryptjs"

export class HashManager {

    public async hash(plaintext: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(plaintext, salt)
        return hash
    }

    public async compare(plaintext: string, hash: string): Promise<boolean> {
        const result = await bcrypt.compare(plaintext, hash)
        return result
    }
    
}