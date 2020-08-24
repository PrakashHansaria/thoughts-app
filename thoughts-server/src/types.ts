import { IDatabaseDriver, Connection, EntityManager } from "@mikro-orm/core"
import { Response, Request, Express } from "express"

export type MyContext =  {
    em: EntityManager<IDatabaseDriver<Connection>>;
    req: Request & {session: Express.Session};
    res: Response;
}