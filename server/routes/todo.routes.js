const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");

const router = require("express").Router();

// api todo/
router
  .route("/")
  .get((req, res) => {
    Todo.find({})
      .then(data => {
        console.log("Todo Get");
        console.log({ data });
        res.json({ success: true });
      })
      .catch(err => {
        console.log({ err });
        res.json({ success: false });
      });
  })
  .post((req, res) => {
    console.log({ reqBody: req.body });

    Todo.create({
      text: req.body.text,
    })
      .then(data => {
        console.log({ data });
        res.json({ success: true });
      })
      .catch(err => {
        console.log({ err });
        res.json({ success: true });
      });
  });

// /api/todo/:id
router.route("/:id").delete((req, res) => {
  console.log(req.params);

    Todo 
        .findByIdAndDelete(req.params.id)
        .then(data => {
            console.log({data}); 
            res.json({ success: true})
        })
        .catch(err => {
            console.log({err})
            res.json({success: false})
        })
});

module.exports = router;
