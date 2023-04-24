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

// Express y bcrypts 
const express = require('express');
const app = express();
const bcriptjs=require('bcryptjs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/login', async(req, res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    
    if(user == 'admin' && pass == '12345'){
        let passhash = await bcriptjs.hash(pass, 8);
        res.json({
            message:'¡Autentication exitosa!',
            passhash:passhash
        });
    } else{
        res.json({
            message:'Ingrese correctamente sus credenciales'
        })
    }
});

app.post('/login', async (ctx) => {
    const user = ctx.request.body.user;
    const pass = ctx.request.body.pass;
    if (user == 'admin' && pass == '12345') {
        let passhash = await bcriptjs.hash(pass, 8);
        ctx.body = {
            message: '¡Autenticación exitosa!',
            passhash: passhash
            
        };
        
    } else {
        ctx.body = {
            message: 'Ingrese correctamente sus credenciales'
        };
        
    }

});
app.get('/compare', (req, res)=>{
    let hashSaved = '$2a$08$Plcf52YL1JzpKAci/THxFuaRyE6ilYtnHPpgY3qqnTxdMnuOnn4y.';
    let compare = bcriptjs.compareSync('123456', hashSaved);
    if(compare){
        res.json('OK');
    }else{
        res.json('Son diferentes ');
    }
});
export default userRouter;
