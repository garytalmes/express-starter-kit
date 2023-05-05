const router = require("express").Router();
const User = require("../../models/User");


router.get("/", (req, res) => {
  User.findAll()
    .then( resp => res.status(200).json({ status: "success", payload: resp }))
    .catch( err => res.status(200).json({ msg: err.message }))
})


router.get("/:id", (req, res) => {
  User.findByPk(req.params.id)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.post("/", (req, res) => {
  User.create(req.body)
    .then( resp => res.status(200).json({ status: "success", payload: resp }))
    .catch( err => res.status(200).json({ msg: err.message }))
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
    .then( resp => res.status(200).json({ status: "success", payload: resp }))
    .catch( err => res.status(200).json({ msg: err.message }))
})

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( resp => res.status(200).json({ status: "success", payload: resp }))
  .catch( err => res.status(200).json({ msg: err.message }))
})


// Here's a route you can use for authenticating a login
router.post("/login", async (req, res) => {
  const foundUser = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  if( !foundUser ) return res.status(401).json({ status: "error", msg: "No user found" })
  if( !foundUser.validatePassword(req.body.password) ) return res.status(401).json({ status: "error", msg: "No user found" })
  return res.status(200).json({ status: "success", payload: foundUser })
})

module.exports = router