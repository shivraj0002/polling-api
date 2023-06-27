const mongoose = require("mongoose");

// preparing the database connection url from environment variables
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

// connect to db
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