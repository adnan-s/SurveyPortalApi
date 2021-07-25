const LocalStratgegy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
require('dotenv').config();

function initialize(passport, getUserByEmail, getUserById) {

    const authenticate = (email, password, done) => {
        // find user with the email address.
        console.log(done);
        getUserByEmail(email).then(async user => {
            if (user === undefined) {
                return done(null, false, { message: 'Invalid credentials provided.' });
            } else {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    const isStaff = await bcrypt.compare('staff', user.role);
                    const isStudent = await bcrypt.compare('student', user.role);
                    const isAdmin = await bcrypt.compare('admin', user.role);
                    if (isStaff) {
                        user.role = 'staff';
                    } else if(isStudent) {
                        user.role = 'student';
                    } else if(isAdmin) {
                        user.role = 'admin';
                    }    
                    delete user.password;
                    // this access_token_secret value can be generated using node crypto library.
                    // run this command in node
                    // require('crypto').randomBytes(64).toString()
                    return done(null, user);
                } else {
                    // wrong password send error.
                    return done(null, false, { message: 'Invalid credentials provided.' });
                }
            }
        });
    };

    passport.use(new LocalStratgegy({ usernameField: 'email' }, authenticate));

    passport.serializeUser((user, done) => {
        done(null, user.UserId);
    });

    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
    });

}

module.exports = initialize;
