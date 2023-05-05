const router = require("express").Router();
const Other = require("../../models/Other");


router.get("/", (req, res) => {
  Other.findAll()
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.get("/:id", (req, res) => {
  Other.findByPk(req.params.id)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.post("/", (req, res) => {
  Other.create(req.body)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

router.put("/:id", (req, res) => {
  Other.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

router.delete("/:id", (req, res) => {
  Other.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( resp => res.json({ status: "success", payload: resp }))
  .catch( err => res.json({ msg: err.message }))
})

module.exports = router