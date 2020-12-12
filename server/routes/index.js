const router = require("express").Router(); 
const todos = require("./todo.routes");


//use this api path. /api/todo/
router.use("/api/todo", todos)

module.exports = router;