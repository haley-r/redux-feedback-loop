const express=require('express');
const router=express.Router();
const pool=require('../modules/pool');

router.get('/', (req,res)=>{
    console.log('in GET /feedback');
    //send query to db to get the info as arrays from rows
    pool.query('SELECT * FROM "feedback";').then((result)=>{
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting stuff from db', error);
        res.sendStatus(500);
    });
})

router.delete('/:id', (req, res) => {
    console.log('in DELETE /feedback', req.params.id);
    //send query to db to get the info as arrays from rows
    let query = 'DELETE FROM "feedback" where "id" = $1;';
    pool.query(query, [req.params.id]).then((result) => {
        console.log('result.rows:', result.rows);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error getting stuff from db', error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log('in POST /feedback with', req.body);
    let query = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`
    //send query to db to get the info as arrays from rows
    pool.query(query,[Number(req.body.feeling), Number(req.body.understanding), Number(req.body.support), req.body.comments]).then((result) => {
        console.log(result);
        res.send(200);
    }).catch((error) => {
        console.log('error getting stuff from db', error);
        res.sendStatus(500);
    });
})

module.exports=router;