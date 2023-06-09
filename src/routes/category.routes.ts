/**
 * Category Routes
 */

import Router from "koa-router";
import { CategoryController } from "../controllers/category.controller";
import { Category } from "src/models/category.model";

//init
const categoryRouter = new Router();

categoryRouter.get("/", async (ctx) => {
  const categoryController = new CategoryController();
  const categories = await categoryController.getCategories();
  ctx.status = 200;
  ctx.body = categories;
});

categoryRouter.get("/:id", async (ctx) => {
  const categoryController = new CategoryController();
  const category = await categoryController.getCategory(ctx.params.id);
  ctx.status = 200;
  ctx.body = category;
});

categoryRouter.post("/", async (ctx) => {
  const categoryController = new CategoryController();
  const category = await categoryController.createCategory(ctx.request.body as Category);
  ctx.status = 200;
  ctx.body = category;
});

categoryRouter.put("/:id", async (ctx) => {
  const categoryController = new CategoryController();
  const category = await categoryController.updateCategory(
    ctx.params.id,
    ctx.request.body as Category
  );
  ctx.status = 200;
  ctx.body = category;
});

categoryRouter.delete("/:id", async (ctx) => {
  const categoryController = new CategoryController();
  const category = await categoryController.deleteCategory(ctx.params.id);
  ctx.status = 200;
  ctx.body = category;
});

export default categoryRouter;
