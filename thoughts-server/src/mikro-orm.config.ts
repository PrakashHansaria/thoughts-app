import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { __prod__ } from "./constants";
import path from 'path'

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), 
        pattern: /^[\w-]+\d+\.[tj]s$/, 
      },
    dbName: 'thoughts',
    user: 'postgres',
    password: 'dbRoot',
    entities: [Post, User],
    type: 'postgresql',
    debug: !__prod__ ,
} as const;