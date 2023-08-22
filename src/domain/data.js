import _ from 'lodash';
import { ObjectId } from 'mongodb';
import { NotFoundError, InternalServerError, UnprocessableEntityError } from '@/utils/helper/error';
import { findOne, insertOne, findPaginated, countData, updateOne } from '@/utils/databases/connection';
import DecisionTree from './algoritma/decisiontree';

export default class Data{
  async insertData(payload){
    try{
      const { name, produk, promosi, tempat, harga, pelayanan, token } = payload;

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
        kepuasan: decision,
        token: token,
        tokenUse: false
      };

      const insert = await insertOne(data, 'customers');
      if(insert.err)throw { message: 'fail to insert data customers' };

      return insert;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }

  async list(payload){
    try{
      const { page, size, sort, search } = payload;
      const listData = await findPaginated(sort, parseInt(size), parseInt(page));
      if(listData.err)throw { message: 'fial to list data mahasiswa' };

      if(search){
        const newSearch = { token: search };
        const listDataSearch = await findPaginated(sort, parseInt(size), parseInt(page), newSearch);
        if(listDataSearch.err)throw { message: 'fial to list data customer' };

        return listDataSearch;
      }

      return listData;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }

  async update(payload){
    try{
      const { id } = payload;
      const getData = await findOne({ _id: new ObjectId(id) }, 'customers');
      if(getData.err)throw { message: 'fail to get data customer' };
      if(_.isEmpty(getData.data)){
        return { err: new NotFoundError('data not found') };
      }

      const documents = {
        tokenUse: true
      };

      const update = await updateOne({ _id: new ObjectId(id) }, documents);
      if(update.err)throw { message: 'fail to update data customer' };

      return update;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }
}
