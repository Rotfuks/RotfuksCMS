import userService from '../service/UserService';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const signin = function(req, res) {
  userService.findUser(req.body.name)
      .then((user) => {
        if (!user) {
          return res.status(404).send({message: 'This User does not exist.'});
        }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password,
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: 'Invalid Password!',
          });
        }

        const token = jwt.sign({id: user.id, name: user.name},
            process.env.SECRET, {
              expiresIn: 10800, // 3 hours
            });

        res.status(200).send({
          id: user._id,
          username: user.username,
          email: user.email,
          accessToken: token,
        });
      })
      .catch((err) => {
        res.status(500).send({message: err});
        console.log('Caught: ', err.message);
      });
};

export default {
  signin,
};
