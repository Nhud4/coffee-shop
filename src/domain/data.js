import _ from 'lodash';
import { NotFoundError, InternalServerError, UnprocessableEntityError } from '@/utils/helper/error';
import { findOne, insertOne } from '@/utils/databases/connection';
import DecisionTree from './algoritma/decisiontree';

export default class Data{
  async insertData(payload){
    try{
      const { name, produk, promosi, tempat, harga, pelayanan } = payload;

      const decision = DecisionTree({ produk, promosi, tempat, harga, pelayanan });

      const getUser = await findOne({ name: name }, 'customers');
      if(getUser.err)throw { message: 'fail to get user data' };

      if(!_.isEmpty(getUser.data)){
        return { err: new UnprocessableEntityError('name already exists', [{
          field: 'name',
          message: 'name already exists'
        }]) };
      }

      const data = {
        name: name,
        produk: produk,
        promosi: promosi,
        tempat: tempat,
        harga: harga,
        pelayanan: pelayanan,
        kepuasan: decision
      };

      const insert = await insertOne(data, 'customers');
      if(insert.err)throw { message: 'fail to insert data customers' };

      return insert;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }
}
