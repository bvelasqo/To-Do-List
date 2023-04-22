/** 
 * const express = require('express');
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
        let passhash = await bcrypt.hash(pass, 8);
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
        res.json('Son diferentes puto');
    }
});
/** 
app.get('/compare', async (ctx) => {
    let hashSaved = '$2a$08$Plcf52YL1JzpKAci/THxFuaRyE6ilYtnHPpgY3qqnTxdMnuOnn4y.';
    let passwordToCheck = '123456';
    
    // Utilizar bcrypt.compare para comparar la contraseña con el hash almacenado
    let compare = await bcrypt.compare(passwordToCheck, hashSaved);

    if (compare) {
        ctx.body = 'OK';
    } else {
        ctx.body = 'Las contraseñas no coinciden';
    }
});
*/