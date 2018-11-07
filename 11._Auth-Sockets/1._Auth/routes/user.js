exports.userRoutes = function (app, db) {

    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    app.post('/signup', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        if (email && password) {

            // SELECT * FROM users WHERE email = '?' 
            db.User.query().select().where({ email }).then(userArray => {
                if (userArray.length > 0) {
                    res.send({ "status": 200, "response": "email is in use" })
                }
                bcrypt.hash(password, saltRounds).then(function (hash) {
                    // INSERT INTO users('email', 'password') VALUES('?', '?');
                    db.User.query().insert({ email, password: hash }).then(persistedData => {
                        req.session.isLoggedIn = true;
                        res.send({ "status": 200, "response": "everything went well" })
                    });
                });
            })
        }
        res.send({ "status": 500, "response": "email or password empty" });
    });

    app.post('/login', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        db.User.query().select().where({ email }).then(userArray => {
            if (userArray.length > 0) {
                bcrypt.compare(password, userArray[0].password).then(response => {
                    if (response) {
                        req.session.isLoggedIn = true;
                        res.redirect('/forbidden');
                    }
                    res.send({ "status": 403, "response": "unauthorized" })
                })
            }
            
            res.send({ "status": 403, "response": "unauthorized" })

        })
    });


    app.get('/logout', (req, res) => {
        req.session.destroy();
        res.redirect('/');
    })

}