module.exports = (app) => {
    var router = require("express").Router();

    router.get("/", (req, res) => {
        res.sendFile(__dirname.substring(0, __dirname.lastIndexOf("\\")) + "/pages/main.html");
    });

    app.use("/admin", router);
};