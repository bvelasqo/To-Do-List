import koa from "koa";
import bodyparser from "koa-bodyparser";
import loggerKoa from "koa-logger";
import cors from "koa2-cors";
import mount from "koa-mount";
import auth from "koa-basic-auth";
import health from "./routes/health.routes";
import taskRouter from "./routes/tasks.routes";
import 'database/dynamodb' // para que dynamo corra XD
import client from "./shared/db/postgres";
import Router from "koa-router";
import userRouter from "./routes/users.routes";
import categoryRouter from "./routes/category.routes";

// establish database connection and initialize data source FOR POSTGRES
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
const router = new Router()

// app.use(health.routes());
// router.use(mount('/login', login.routes()))
router.use(mount('/task', taskRouter.routes()))
router.use(mount('/user', userRouter.routes()))
router.use(mount('/category', categoryRouter.routes()))
// router.use(mount('/label', labelRouter.routes()))
app.use(mount('/api/v1', router.routes()))


//export server
export default app;