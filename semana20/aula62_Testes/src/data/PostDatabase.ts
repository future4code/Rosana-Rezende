import { BaseDatabase } from "./BaseDatabase";
import moment from "moment";
import { Post, PostOutput } from "../model/Post";

import dotenv from "dotenv";

dotenv.config();

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME: string = "LaBookPost"

  public async createPost(post: Post
  ): Promise<void> {
    await this.connection()
      .insert({
        id: post.getId(),
        image: post.getImage(),
        description: post.getDescription(),
        creation_date: post.getCreationDate(),
        type: post.getType(),
        user_id: post.getUserId()
      })
      .into(PostDatabase.TABLE_NAME)
  }

  public async getFeed(id: string): Promise<PostOutput[]> {
    const result = await this.connection().raw(`
      SELECT
        p.id as post_id,
        p.image,
        p.description,
        p.creation_date,
        p.type,
        p.user_id,
        u.name
      FROM LaBookPost p
      JOIN LaBookUser u ON p.user_id = u.id
      JOIN LaBookUserFollow f ON p.user_id = f.user_to_make_friendship_id OR p.user_id = f.user_id
      WHERE (f.user_id = "${id}" OR f.user_to_make_friendship_id = "${id}") AND p.user_id <> "${id}"
      ORDER BY creation_date DESC
    `)
    const feed = []
    for (const item of result[0]) {
      const creationDateFormated = moment(item.creation_date).format("DD/MM/YYYY")
      const newPost = new PostOutput(
        item.post_id,
        item.image,
        item.description,
        creationDateFormated,
        item.type,
        item.name,
        item.user_id
      )
      feed.push(newPost)
    }
    return feed
  }

  // Para testes

  public async getPostById(id: string): Promise<Post> {
    const result = await this.connection()
      .select("*")
      .from(PostDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deletePost(id: string): Promise<any> {
    await this.connection()
      .delete()
      .from(PostDatabase.TABLE_NAME)
      .where({ id });
  }

}