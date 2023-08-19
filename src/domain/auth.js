import _ from 'lodash';
import Password from '@/utils/helper/password';
import { NotFoundError, InternalServerError, UnprocessableEntityError } from '@/utils/helper/error';
import { findOne, insertOne } from '@/utils/databases/connection';

const passwordUtils = new Password();

export default class Auth{
  async login(payload){
    try{
      const { username, password } = payload;

      const getUser = await findOne({ username: username }, 'users');
      if(getUser.err) throw { message: 'fail to get user data by username' };

      if(_.isEmpty(getUser.data)){
        return { err: new NotFoundError('data admin tidak ditemukan') };
      }

      const isPasswordValid = await passwordUtils.compare(password, getUser.data.password);
      if(!isPasswordValid) throw { message: 'username or password is incorrect' };

      return getUser;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }

  async register(payload){
    try{
      const { name, username, password } = payload;

      const hashPassword = await passwordUtils.hash(password);
      const data = {
        name: name,
        username: username,
        password: hashPassword,
        userType: 'admin'
      };

      const getUser = await findOne({ username: username }, 'users');
      if(getUser.err)throw { message: 'fail to get data user' };
      if(!_.isEmpty(getUser.data)){
        return { err: new UnprocessableEntityError('username already exists', [{
          field: 'username',
          message: 'username already exists'
        }]) };
      }

      const insertData = await insertOne(data, 'users');
      if(insertData.err)throw{ message: 'fail to insert data' };

      return data;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }
}
