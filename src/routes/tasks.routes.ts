/**
 * Tasks Routes
 */

/**
 * Category Routes
 */

import Router from "koa-router";
import { TaskController } from "../controllers/task.controller";
import { Task } from "src/models/task.model";

//init
const taskRouter = new Router();

taskRouter.get("/", async (ctx) => {
  const taskController = new TaskController();
  const tasks = await taskController.getTasks();
  ctx.status = 200;
  ctx.body = tasks;
});

taskRouter.get("/:id", async (ctx) => {
  const taskController = new TaskController();
  const task = await taskController.getTask(ctx.params.id);
  ctx.status = 200;
  ctx.body = task;
});

taskRouter.post("/", async (ctx) => {
  const taskController = new TaskController();
  const task = await taskController.createTask(ctx.request.body as Task);
  ctx.status = 200;
  ctx.body = task;
});

taskRouter.put("/:id", async (ctx) => {
  const taskController = new TaskController();
  const task = await taskController.updateTask(
    ctx.params.id,
    ctx.request.body as Task
  );
  ctx.status = 200;
  ctx.body = task;
});

taskRouter.delete("/:id", async (ctx) => {
  const taskController = new TaskController();
  const task = await taskController.deleteTask(ctx.params.id);
  ctx.status = 200;
  ctx.body = task;
});

export default taskRouter;
