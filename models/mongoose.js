const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://shivraj:EWpNyGOfQlDHvieQ@cluster0.eeayc1m.mongodb.net/natours?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("DB connection successful!: ✅"))
    .catch((e) => console.log("DB connection failed!: ❌", e));

module.exports = mongoose;