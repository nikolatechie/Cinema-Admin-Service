module.exports = (app) => {
    var router = require("express").Router();

    router.get("/schedule", (req, res) => {
        res.sendFile(__dirname.substring(0, __dirname.lastIndexOf("\\")) + "/html/schedule.html");
    });

    app.use("/admin", router);
};