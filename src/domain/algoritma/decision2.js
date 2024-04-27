export default function DecisionTree2(payload){
  const { produk, promosi, tempat, harga, pelayanan } = payload;
  let kesimpulan;

  if(produk === 'enak' && promosi === 'manarik'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && promosi === 'kurang_manarik'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && tempat === 'nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && tempat === 'kurang_nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && pelayanan === 'ramah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && pelayanan === 'kurang_ramah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'murah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'sedang'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && tempat === 'nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && tempat === 'kurang_nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && pelayanan === 'ramah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && pelayanan === 'kurang_ramah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && promosi === 'kurang_menarik'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && promosi === 'menarik' && pelayanan === 'ramah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && promosi === 'menarik' && pelayanan === 'kurang_ramah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && promosi === 'menarik' && tempat === 'kurang_nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && promosi === 'menarik' && tempat === 'nyaman' && pelayanan === 'ramah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'enak' && harga === 'mahal' && promosi === 'menarik' && tempat === 'nyaman' && pelayanan === 'kurang_ramah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && harga === 'murah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && harga === 'sedang'){
    kesimpulan = 'Tidak Puas';
  }

  if(produk === 'kurang_enak' && harga === 'mahal'){
    kesimpulan = 'Tidak Puas';
  }

  if(produk === 'kurang_enak' && tempat === 'nyaman'){
    kesimpulan = 'Tidak Puas';
  }

  if(produk === 'kurang_enak' && tempat === 'kurang_nyaman'){
    kesimpulan = 'Tidak Puas';
  }

  if(produk === 'kurang_enak' && promosi === 'menarik'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && promosi === 'kurang_menarik'){
    kesimpulan = 'Tidak Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'kurang_ramah'){
    kesimpulan = 'Tidak Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && tempat === 'nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && tempat === 'kurang_nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && harga === 'murah'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && harga === 'mahal'){
    kesimpulan = 'Tidak Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && harga === 'sedang' && tempat === 'nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && harga === 'sedang' && tempat === 'kurang_nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && harga === 'sedang' && promosi === 'menarik'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && harga === 'sedang' && promosi === 'kurang_menarik' && tempat === 'nyaman'){
    kesimpulan = 'Puas';
  }

  if(produk === 'kurang_enak' && pelayanan === 'ramah' && harga === 'sedang' && promosi === 'kurang_menarik' && tempat === 'kurang_nyaman'){
    kesimpulan = 'Puas';
  }

  return kesimpulan;
}
