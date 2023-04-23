/**
 * User Routes
 */

import Router from "koa-router";
import { UserController } from "controllers/user.controller";

//init
const userRouter = new Router();

userRouter.get("/", async (ctx) => {
  const { request, response } = ctx;
  const userController = new UserController();
  const users = userController.getUsers();
  response.status, ctx.status = 200
  response.body, ctx.body = users
});

userRouter.get("/:id", async (ctx) => {
  const id = ctx.params.id
  const userController = new UserController();
  const user = await userController.getUser(id);
  ctx.status = 200;
  ctx.body = user
});

userRouter.post("/", async (ctx) => {
  const userController = new UserController();
  const user = ctx.body.user
  const response = userController.createUser(user)
  ctx.status = 200;
  ctx.body = response;
});

userRouter.put("/:id", async (ctx) => {
  const userController = new UserController();
  const newUser = ctx.body.user
  const id = ctx.params.id
  const user = await userController.updateUser(id, newUser)
  ctx.status = 200;
  ctx.body = user
});

userRouter.delete("/:id", async (ctx) => {
  const userController = new UserController();
  const id = ctx.params.id
  const user = await userController.deleteUser(id);
  ctx.status = 200;
  ctx.body = user;
});

export default userRouter;
