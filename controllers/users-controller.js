const uuid = require('uuid/v4');
const HttpError = require('../models/http-error');

const DUMMY_USERS = [
    {
        id: "u1",
        name: "Puffin",
        email: "puffin@gmail.com",
        password: "sleep",
        image:
          "https://image.shutterstock.com/image-photo/black-white-domestic-cat-lying-260nw-1178941306.jpg",
        places: 3
      }
    ];
    
    const getUsers = (req, res, next) => {
        res.json({ users: DUMMY_USERS });
    };

    const loginUser = (req, res, next) => {
      const { email, password } = req.body;
      const identifyUser = DUMMY_USERS.find(u => u.email === email);
      if (!identifyUser || identifyUser.password !== password) {
        throw new HttpError(
          "Could not identify user, credentials seem to be wrong.",
          401
        );
      }
      res.json({ message: "Logged in!" });
    };


    const signupUser = (req, res, next) => {
        const { name, email, password } = req.body;
      
        const hasUser = DUMMY_USERS.find(u => u.email === email);
        if (hasUser) {
          throw new HttpError('Could not create user, email already exists.', 422);
        }
      
        const createdUser = {
          id: uuid(),
          name, // name: name
          email,
          password
        };
      
        DUMMY_USERS.push(createdUser);
      
        res.status(201).json({user: createdUser});
      };

    exports.getUsers = getUsers;
    exports.loginUser = loginUser;
    exports.signupUser = signupUser;
