import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { User, stringToUserRole, UserRole } from "../model/User";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/UnauthorizedError";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ) { }

    //1 
    public async signupListeningUser(
        name: string,
        email: string,
        nickname: string,
        password: string,
        role: string
    ) {
        if (!name || !email || !nickname || !password || !role) {
            throw new InvalidParameterError("Missing input");
        }

        if (email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if (password.length < 6) {
            throw new InvalidParameterError("Invalid password");
        }

        const id = this.idGenerator.generatorId()

        const cryptedPassword = await this.hashManager.hash(password)

        const user = new User(id, name, email, nickname, cryptedPassword, stringToUserRole(role))

        await this.userDatabase.createListeningUser(user)

        const accessToken = this.authenticator.generateToken({ id, role })

        return { accessToken }
    }


    public async signupAdministratorUser(
        name: string,
        email: string,
        nickname: string,
        password: string,
        token: string
    ) {
        if (!name || !email || !nickname || !password || !token) {
            throw new InvalidParameterError("Missing input");
        }

        const userData = this.authenticator.verify(token)
        const user = await this.userDatabase.getUserById(userData.id)
        if (!user) {
            throw new NotFoundError("User not found");
        }
        if(user.getRole() !== UserRole.ADMINISTRATOR){
            throw new UnauthorizedError("You must be an admin to access this endpoint")
        }

        if (email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if (password.length < 10) {
            throw new InvalidParameterError("Invalid password");
        }        
        
        const role = UserRole.ADMINISTRATOR
        const id = this.idGenerator.generatorId()
        const cryptedPassword = await this.hashManager.hash(password)

        const newUser = new User(id, name, email, nickname, cryptedPassword, stringToUserRole(role))

        await this.userDatabase.createListeningUser(newUser)

        const accessToken = this.authenticator.generateToken({ id, role })

        return { accessToken }
    }





}