const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require("./routes/main.route")(app);
require("./routes/movie.route")(app);
require("./routes/schedule.route")(app);
require("./routes/hall.route")(app);
require("./routes/user.route")(app);
require("./routes/ticket.route")(app);

app.listen(8082, () => console.log("Server is running.."));