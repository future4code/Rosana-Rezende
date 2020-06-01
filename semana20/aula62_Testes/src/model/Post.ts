export class Post {
    constructor(
        private id: string,
        private image: string,
        private description: string,
        private creationDate: Date,
        private type: string,
        private userId: string
    ) { }

    public getId(): string {
        return this.id
    }

    public getImage(): string {
        return this.image
    }

    public getDescription(): string {
        return this.description
    }

    public getCreationDate(): Date {
        return this.creationDate
    }

    public getType(): string {
        return this.type
    }

    public getUserId(): string {
        return this.userId
    }

}


export class PostOutput {
    constructor(
        public postId: string,
        public image: string,
        public description: string,
        public creationDate: string,
        public type: string,
        public name: string,
        public userId: string
    ) { }

}