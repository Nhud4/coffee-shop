import _ from 'lodash';
import { ObjectId } from 'mongodb';
import { NotFoundError, InternalServerError, UnprocessableEntityError } from '@/utils/helper/error';
import { findOne, insertOne, findPaginated, countData, updateOne, findAll } from '@/utils/databases/connection';
import DecisionTree from './algoritma/decisiontree';
import DecisionTree2 from './algoritma/decision2';

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

  async decision(){
    try{
      const getData = await findAll('customers');
      if(getData.err) throw { message: 'fail to get data' };

      const data = getData.data.map((item) => {
        const payload = {
          produk: item.produk,
          promosi: item.promosi,
          tempat: item.tempat,
          harga: item.harga,
          pelayanan: item.pelayanan
        };
        return {
          ...item,
          kepuasan: DecisionTree2(payload)
        };
      });

      return data;
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

  async summary(){
    try{

      const countPuas = await countData({ kepuasan: 'Puas' });
      if(countPuas.err)throw { message: 'fail to count data' };

      const countTidakPuas = await countData({ kepuasan: 'Tidak Puas' });
      if(countTidakPuas.err)throw { message: 'fail to count data' };

      const puasProduk1 = await countData({ kepuasan: 'Puas' , produk: 'enak' });
      if(puasProduk1.err)throw { message: 'fail to count data' };

      const puasProduk2 = await countData({ kepuasan: 'Puas' , produk: 'kurang_enak' });
      if(puasProduk2.err)throw { message: 'fail to count data' };

      const tidakProduk1 = await countData({ kepuasan: 'Tidak Puas' , produk: 'enak' });
      if(tidakProduk1.err)throw { message: 'fail to count data' };

      const tidakProduk2 = await countData({ kepuasan: 'Tidak Puas' , produk: 'kurang_enak' });
      if(tidakProduk2.err)throw { message: 'fail to count data' };

      const puasPromosi1 = await countData({ kepuasan: 'Puas' , promosi: 'menarik' });
      if(puasPromosi1.err)throw { message: 'fail to count data' };

      const puasPromosi2 = await countData({ kepuasan: 'Puas' , promosi: 'kurang_menarik' });
      if(puasPromosi2.err)throw { message: 'fail to count data' };

      const tidakPromosi1 = await countData({ kepuasan: 'Tidak Puas' , promosi: 'menarik' });
      if(tidakPromosi1.err)throw { message: 'fail to count data' };

      const tidakPromosi2 = await countData({ kepuasan: 'Tidak Puas' , promosi: 'kurang_menarik' });
      if(tidakPromosi2.err)throw { message: 'fail to count data' };

      const puasTempat1 = await countData({ kepuasan: 'Puas' , tempat: 'nyaman' });
      if(puasTempat1.err)throw { message: 'fail to count data' };

      const puasTempat2 = await countData({ kepuasan: 'Puas' , tempat: 'kurang_nyaman' });
      if(puasTempat2.err)throw { message: 'fail to count data' };

      const tidakTempat1 = await countData({ kepuasan: 'Tidak Puas' , tempat: 'nyaman' });
      if(tidakTempat1.err)throw { message: 'fail to count data' };

      const tidakTempat2 = await countData({ kepuasan: 'Tidak Puas' , tempat: 'kurang_nyaman' });
      if(tidakTempat2.err)throw { message: 'fail to count data' };

      const puasHarga1 = await countData({ kepuasan: 'Puas' , harga: 'murah' });
      if(puasHarga1.err)throw { message: 'fail to count data' };

      const puasHarga2 = await countData({ kepuasan: 'Puas' , harga: 'sedang' });
      if(puasHarga2.err)throw { message: 'fail to count data' };

      const puasHarga3 = await countData({ kepuasan: 'Puas' , harga: 'mahal' });
      if(puasHarga3.err)throw { message: 'fail to count data' };

      const tidakHarga1 = await countData({ kepuasan: 'Tidak Puas' , harga: 'murah' });
      if(tidakHarga1.err)throw { message: 'fail to count data' };

      const tidakHarga2 = await countData({ kepuasan: 'Tidak Puas' , harga: 'sedang' });
      if(tidakHarga2.err)throw { message: 'fail to count data' };

      const tidakHarga3 = await countData({ kepuasan: 'Tidak Puas' , harga: 'mahal' });
      if(tidakHarga3.err)throw { message: 'fail to count data' };

      const puasPelayanan1 = await countData({ kepuasan: 'Puas' , pelayanan: 'ramah' });
      if(puasPelayanan1.err)throw { message: 'fail to count data' };

      const puasPelayanan2 = await countData({ kepuasan: 'Puas' , pelayanan: 'kurang_ramah' });
      if(puasPelayanan2.err)throw { message: 'fail to count data' };

      const tidakPelayanan1 = await countData({ kepuasan: 'Tidak Puas' , pelayanan: 'ramah' });
      if(tidakPelayanan1.err)throw { message: 'fail to count data' };

      const tidakPelayanan2 = await countData({ kepuasan: 'Tidak Puas' , pelayanan: 'kurang_ramah' });
      if(tidakPelayanan2.err)throw { message: 'fail to count data' };

      const tokenUse = await countData({ tokenUse: true });
      if(tokenUse.err)throw { message: 'fail to count token used' };

      const tokenUnuse = await countData({ tokenUse: false });
      if(tokenUnuse.err)throw { message: 'fail to count token unused' };

      const data = {
        puas: countPuas.data.totalData,
        tidakPuas: countTidakPuas.data.totalData,
        totalData: countPuas.data.totalData + countTidakPuas.data.totalData,
        puasProduk: puasProduk1.data.totalData + puasProduk2.data.totalData,
        tidakProduk: tidakProduk1.data.totalData + tidakProduk2.data.totalData,
        puasPromosi: puasPromosi1.data.totalData + puasPromosi2.data.totalData,
        tidakPromosi: tidakPromosi1.data.totalData + tidakPromosi2.data.totalData,
        puasTempat: puasTempat1.data.totalData + puasTempat2.data.totalData,
        tidakTempat: tidakTempat1.data.totalData + tidakTempat2.data.totalData,
        puasHarga: puasHarga1.data.totalData + puasHarga2.data.totalData + puasHarga3.data.totalData,
        tidakHarga: tidakHarga1.data.totalData + tidakHarga2.data.totalData + tidakHarga3.data.totalData,
        puasPelayanan: puasPelayanan1.data.totalData + puasPelayanan2.data.totalData,
        tidakPelayanan: tidakPelayanan1.data.totalData = tidakPelayanan2.data.totalData,
        usedToken: tokenUse.data.totalData,
        unusedToken: tokenUnuse.data.totalData,
        totalToken: tokenUse.data.totalData + tokenUnuse.data.totalData
      };

      return data;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }
}
