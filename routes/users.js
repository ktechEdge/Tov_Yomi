const express = require('express');
const router = express.Router();
module.exports = router;
// router.get("/", (req, res) => {
//     res.render("Users", { pageTitle: "Users" });
// });
router.post('/Add', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;

    let q = "INSERT INTO users ";
        q += "(First_name, Last_name, User_name, Email, Password) ";
        q += "VALUES ";
        q += `('${firstName}','${lastName}','${userName}','${email}','${password}')`;

    console.log(q);

        db_pool.query(q, function (err, rows, fields) {

            if (err) {
                res.status(500).json({message: err});
            } else {
                res.status(200).json({message: "OK"});
            }

        });
});
router.get("/List", (req, res) => {
    let q = `SELECT CONCAT(First_name, ' ', Last_name) AS FullName, User_name, Email, Password FROM users`;
    db_pool.query(q, function (err, rows, fields) {
        if (err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({rows: rows});
        }
    });
});
router.delete("/Delete/:id", (req, res) => {
    let id = req.params.id;
    let q = `DELETE FROM \`users\` WHERE id = '${id}'`;
    db_pool.query(q, function (err, rows, fields) {
        if (err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({message: `row'${id}'deleted!`});
        }
    });
});
router.patch("/Update", (req, res) => {
    let id = req.body.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let q = "UPDATE users SET ";
        q += `First_name = '${firstName}',`;
        q += `Last_name = '${lastName}',`;
        q += `User_name = '${userName}',`;
        q += `Email = '${email}',`;
        q += `Password = '${password}'`;
        q += ` WHERE id = '${id}'`;

    console.log(q);
    db_pool.query(q, function (err, rows, fields) {
        if (err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({rows: rows});
        }

    });
});
