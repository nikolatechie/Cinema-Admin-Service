module.exports = (app) => {
    var router = require("express").Router();

    router.get("/hall", (req, res) => {
        res.sendFile(__dirname.substring(0, __dirname.lastIndexOf("\\")) + "/html/hall.html");
    });

    app.use("/admin", router);
};