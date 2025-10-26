//controllers/index.js
const index = (req,res) => {
    res.json({ message: "Welcome to CSE 341 API Controller" });
}

module.exports = { index };