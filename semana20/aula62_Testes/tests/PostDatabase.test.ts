import { BaseDatabase } from "../src/data/BaseDatabase";
import { PostDatabase } from "../src/data/PostDatabase";
import { Post, PostOutput } from "../src/model/Post";

const postDatabase = new PostDatabase()

describe("Testing PostDatabase", () => {

    it("Should insert an post into post table", async () => {
        const post = new Post(
            "001", 
            "image 1", 
            "description 1", 
            new Date(2020, 6, 1), 
            "normal", 
            "4ea0b7c0-3a2e-4f9d-8bdd-a6d8f11e7332"
        )
        await postDatabase.createPost(post)
        
        const post1 = await postDatabase.getPostById(post.getId()) // ou "001"
        const post1Output = {
            id: "001",
            image: "image 1", 
            description: "description 1", 
            creation_date: new Date(2020, 6, 1), 
            type: "normal", 
            user_id: "4ea0b7c0-3a2e-4f9d-8bdd-a6d8f11e7332"
        }

        expect(post1).not.toBe(undefined)
        expect(post1).toEqual(post1Output)
    })

    it("Should throw an error when post is duplicated", async () => {
        expect.assertions(3);
        try {
            const post = new Post(
                "002", 
                "image 2", 
                "description 2", 
                new Date(2020, 6, 1), 
                "normal", 
                "4ea0b7c0-3a2e-4f9d-8bdd-a6d8f11e7332"
            )
            await postDatabase.createPost(post)
            await postDatabase.createPost(post)
        } catch (err) {
            expect(err).not.toBe(undefined);
            expect(err.code).toBe("ER_DUP_ENTRY");
            expect(err.errno).toBe(1062);
        }
    });


    afterAll(async () => {
        await postDatabase.deletePost("001")
        await postDatabase.deletePost("002")

        await BaseDatabase.destroyConnection()
    })

})