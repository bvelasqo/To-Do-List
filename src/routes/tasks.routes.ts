/**
 * Tasks Routes
 */

import Router from "koa-router";
import { TaskController } from "../controllers/task.controller";
import { TaskInterface } from "models/task.model";

//init
const taskRouter = new Router();
const taskController = new TaskController();

taskRouter.get("/", async (ctx) => {
  const tasks = await taskController.getTasks();
  ctx.status = 200;
  ctx.body = tasks;
});

taskRouter.get("/:id", async (ctx) => {
  const categoryId = ctx.params.categoryId;
  const taskID = ctx.params.id;
  // const task = await taskController.getTasksByCategory(categoryId, taskID);
  const task = await taskController.getTask(taskID);
  ctx.status = 200;
  ctx.body = task;
});

taskRouter.post("/", async (ctx) => {
  const task = await taskController.createTask(ctx.request.body as TaskInterface);
  ctx.status = 200;
  ctx.body = task;
});

taskRouter.put("/:id", async (ctx) => {
  const task = await taskController.updateTask(
    ctx.params.id,
    ctx.request.body as TaskInterface
  );
  ctx.status = 200;
  ctx.body = task;
});

taskRouter.delete("/:id", async (ctx) => {
  const task = await taskController.deleteTask(ctx.params.id);
  ctx.status = 200;
  ctx.body = task;
});

export default taskRouter;
