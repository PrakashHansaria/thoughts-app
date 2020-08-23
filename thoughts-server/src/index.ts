import 'reflect-metadata'
import { MikroORM } from "@mikro-orm/core";
import microConfig from './mikro-orm.config';
import { Post } from "./entities/Post";
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql'
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up() //Run migrations before executing any db actions
    
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false
        }),
        context: () => ({ em: orm.em })
    });

    apolloServer.applyMiddleware({ app })

    app.listen(5000, () => {
        console.log("Starting  server on port 5000")
    });
}

main()