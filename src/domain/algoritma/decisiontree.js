export default function DecisionTree(payload){
  try{
    const { produk, promosi, tempat, harga, pelayanan } = payload;
    let kesimpulan = '';

    if(produk === 'enak'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && promosi === 'menarik'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && promosi === 'kurang_menarik'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && tempat === 'nyaman'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && tempat === 'kurang_nyaman'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && harga === 'murah'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && harga === 'sedang'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && harga === 'mahal'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'ramah'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ramah' && promosi === 'menarik'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ramah' && promosi === 'kurang_menarik'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ramah' && tempat === 'nyaman'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ramah' && tempat === 'kurang_nayaman'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ramah' && harga === 'murah'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ramah' && harga === 'sedang'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ramah' && harga === 'mahal'){
      kesimpulan = 'Tidak Puas';
    }

    return kesimpulan;
  }catch(err){
    return err;
  }
}
