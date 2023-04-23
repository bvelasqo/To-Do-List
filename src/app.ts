import koa from "koa";
import bodyparser from "koa-bodyparser";
import loggerKoa from "koa-logger";
import cors from "koa2-cors";
import mount from "koa-mount";
import auth from "koa-basic-auth";
import health from "./routes/health.routes";
import tasks from "./routes/tasks.routes";
import 'database/dynamodb' // para que dynamo corra XD
import client from "./shared/db/postgres";

// establish database connection
client
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

//init
const app = new koa();

//middlewares
app.use(cors());
app.use(loggerKoa());
app.use(bodyparser());
app.use(mount("/health", auth({
    name: 'user',
    pass: 'password',
})));

//Routes
app.use(health.routes());
app.use(mount('/tasks', tasks.routes()));

//export server
export default app;