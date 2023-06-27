const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(
        DB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("DB connection successful!: ✅"))
    .catch((e) => console.log("DB connection failed!: ❌"));

module.exports = mongoose;