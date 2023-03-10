import user from '../models/user.model';
import { signToken } from '../helpers/auth';

class UserService {
  async deleteUser(userId) {
    await user.findByIdAndDelete(userId);
    return true;
  }
  createAdminUser = async ({ userData }) => {
    console.log('userInput', userData);
    const {
      email,
      firstname,
      lastname,
      password,
      passwordConfirm,
      gym,
      username,
      phoneNumber,
      birthday,
      gender,
    } = userData;

    const newUser = await user.create({
      email,
      firstname,
      lastname,
      password,
      passwordConfirm,
      phoneNumber,
      username,
      birthday,
      role: 'owner',
      gender,
    });

    const token = signToken(newUser?._id, 'user');
    return {
      user: newUser,
      token,
      tokenExpiration: '40 days',
    };
  };

  editUser = async (userId, userInput) => {
    const editedUser = await user.findByIdAndUpdate(userId, userInput, {
      new: true,
    });

    return editedUser;
  };

  login = async ({ email, password }) => {
    if (!email || !password) {
      return new Error('Please Provide email and password');
    }

    const userData = await user.findOne({ email }).select('+password');
    if (!userData) {
      return new Error('Incorrect email or password');
    }
    let token;

    token = signToken(userData._id, userData.role);

    const correct = await userData.correctPassword(password, userData.password);
    if (!userData || !correct) {
      return new Error('Incorrect email or password');
    }

    return {
      user: userData,
      token,
      tokenExpiration: '18h',
    };
  };

  getUserById = async (userId) => {
    try {
      const userData = await user.findById(userId);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  getUsers = async () => {
    try {
      const userData = await user.find();
      return userData;
    } catch (error) {
      throw error;
    }
  };

  modifyPasswordUser = async (id, passwordInput) => {
    try {
      const User = await user.findOne({ _id: id }).select('+password');
      if (!User) {
        return new Error('User does not exist');
      }
      const correct = await User.correctPassword(
        passwordInput.oldPassword,
        User.password
      );
      if (!correct) {
        return new Error('Invalid Old Password');
      }
      User.password = passwordInput.password;
      User.passwordConfirm = passwordInput.passwordConfirm;
      User.save();
      const token = signToken(id, User?.organizationId, 'user');
      return {
        User,
        token,
      };
    } catch (e) {
      log.info(e, e.response.body);
      return e;
    }
  };
}

export default new UserService();
