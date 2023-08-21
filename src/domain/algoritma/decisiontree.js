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

    if(produk === 'kurang_enak' && pelayanan === 'ranah'){
      kesimpulan = 'Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ranah' && promosi === 'menarik'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ranah' && promosi === 'kurang_menarik'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ranah' && tempat === 'nyaman'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ranah' && tempat === 'kurang_nayaman'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ranah' && harga === 'murah'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ranah' && harga === 'sedang'){
      kesimpulan = 'Tidak Puas';
    }

    if(produk === 'kurang_enak' && pelayanan === 'kurang_ranah' && harga === 'mahal'){
      kesimpulan = 'Tidak Puas';
    }

    return kesimpulan;
  }catch(err){
    return err;
  }
}
