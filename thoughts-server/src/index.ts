import { MikroORM } from "@mikro-orm/core";
import microConfig from './mikro-orm.config'
import { Post } from "./entities/Post";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up() //Run migrations before executing any db actions
    // const post = orm.em.create(Post, {title: 'this is my first post'});
    // await orm.em.persistAndFlush(post);

    const posts = await orm.em.find(Post, {})
    console.log("Post-----",posts)
}

main()