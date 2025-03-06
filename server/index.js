require("dotenv").config({ path: __dirname + "./env" });
const express = require('express');
const cors = require('cors');
const pool = require(__dirname + "/db.config.js");


const app = express();

const PORT = process.env.POT || 9000;

app.use(cors());
app.use(express.json());

// req - request
// res - response
// PGSQL - use $1, $2 for column heads

app.get("/", (req, res) => {
    res.send("Hello asdasdsd!");
});

const getHunters = (req, res) => {
    pool.query('SELECT * FROM hunters', (error, hunters) => {
        if (error) {
            throw error
        }
        res.status(200).json(hunters.rows)
    })
}

app.get('/hunters', getHunters);

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
});

app.post("/add_substats", (req, res) => {
    const sql_statement = "INSERT INTO substats (name, weapon, artifact,core,deleted,icon) VALUES ($1, $2, $3, $4, $5, $6)RETURNING *";
    const values = [
        req.body.name,
        req.body.weapon,
        req.body.artifact,
        req.body.core,
        req.body.deleted,
        req.body.icon,
    ];
    console.log(req.body)
    pool.query(sql_statement, values, (err, result) => {
        if (err) {
            return res.json({ message: "Something Occured" + err });
        }
        return res.json({ success: "Substat Added Successfully" })
    });
})




















