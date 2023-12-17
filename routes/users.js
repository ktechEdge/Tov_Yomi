const express = require('express');
const router = express.Router();
module.exports = router;
router.get("/login", (req, res) => {
    res.render("login", { pageTitle: "login" });
});
router.get("/reg", (req, res) => {
    res.render("register", { pageTitle: "reg" });
});
router.post('/Add', (req, res) => {
    let realName = req.body.realName;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let lastLoginTime = req.body.lastLoginTime;
    let totalLoginCnt = req.body.totalLoginCnt;
    let token = req.body.token;

    let q = "INSERT INTO users ";
        q += "(real_name,  user_name, email, password, last_login_time, total_login_cnt, token) ";
        q += "VALUES ";
        q += `('${realName}','${userName}','${email}','${password}','${lastLoginTime}','${totalLoginCnt}','${token}')`;

    console.log(q);

        db_pool.query(q, function (err, rows, fields) {

            if (err) {
                res.status(500).json({message: err});
            } else {
                res.render("login", { pageTitle: "login" });
            }

        });
});
router.get("/List", (req, res) => {
    let q = `SELECT * FROM users`;
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
    let realName = req.body.realName;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let q = "UPDATE users SET ";
        q += `real_name = '${realName}',`;
        q += `user_name = '${userName}',`;
        q += `email = '${email}',`;
        q += `password = '${password}'`;
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
