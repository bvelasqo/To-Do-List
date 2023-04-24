import Router, { IRouterParamContext } from "koa-router";

//init
const healthRouter = new Router();

healthRouter.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = "ok";
});

healthRouter.get("/health", async (ctx) => {

  ctx.status = 200;
  ctx.body =  {
    nodeVersion: process.version,
    service: 'TypeScriptNode',
    memory: process.memoryUsage(),
    pid: process.pid,
    uptime: process.uptime(),
    environment: 'dev',
    appVersionPackage: "1.0.0",
    };
});



export default healthRouter;