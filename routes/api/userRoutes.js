const router = require("express").Router();
const User = require("../../models/User");


router.get("/", (req, res) => {
  User.findAll()
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.get("/:id", (req, res) => {
  User.findByPk(req.params.id)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.post("/", (req, res) => {
  User.create(req.body)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

router.put("/:id", (req, res) => {
  User.update(
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
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( resp => res.json({ status: "success", payload: resp }))
  .catch( err => res.json({ msg: err.message }))
})

module.exports = router