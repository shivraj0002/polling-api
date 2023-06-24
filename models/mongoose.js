const mongoose = require("mongoose");
// const dotenv = require('dotenv');
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);
console.log(DB);

mongoose
    .connect(
        DB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("DB connection successful!: ✅"))
    .catch((e) => console.log("DB connection failed!: ❌", e));

module.exports = mongoose;