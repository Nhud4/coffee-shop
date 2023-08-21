import dataTesting from '@/utils/dataTesting';
import MethodC45 from './countData';
import Node2 from './node2';
import Node3 from './node3';

const metode = new MethodC45();
const metodeNode2 = new Node2();
const metodeNode3 = new Node3();

export default class Algoritma{
  async test(){
    const node1Label = await metode.countData(dataTesting);
    const node1Produk = await metode.countProduk({ data: dataTesting, entorpyLabel: node1Label.entorpy });
    const node1Promosi = await metode.countPromosi({ data: dataTesting, entorpyLabel: node1Label.entorpy });
    const node1Tempat = await metode.countTempat({ data: dataTesting, entorpyLabel: node1Label.entorpy });
    const node1Harga = await metode.countHarga({ data: dataTesting, entorpyLabel: node1Label.entorpy });
    const node1Pelayanan = await metode.countPelayanan({ data: dataTesting, entorpyLabel: node1Label.entorpy });

    const node2Promosi = await metodeNode2.countPromosi({ data: dataTesting, entorpyNode: node1Produk.entorpy2 , node1: 'Kurang Enak' });
    const node2Tempat = await metodeNode2.countTempat({ data: dataTesting, entorpyNode: node1Produk.entorpy2 , node1: 'Kurang Enak' });
    const node2Harga = await metodeNode2.countHarga({ data: dataTesting, entorpyNode: node1Produk.entorpy2 , node1: 'Kurang Enak' });
    const node2Pelayanan = await metodeNode2.countPelayanan({ data: dataTesting, entorpyNode: node1Produk.entorpy2 , node1: 'Kurang Enak' });

    const node3Promosi = await metodeNode3.countPromosi({ data: dataTesting, entorpyNode: node2Pelayanan.entorpy2 , node1: 'Kurang Enak', node2: 'Kurang Ramah' });
    const node3Tempat = await metodeNode3.countTempat({ data: dataTesting, entorpyNode: node2Pelayanan.entorpy2 , node1: 'Kurang Enak', node2: 'Kurang Ramah' });
    const node3Harga = await metodeNode3.countHarga({ data: dataTesting, entorpyNode: node2Pelayanan.entorpy2 , node1: 'Kurang Enak', node2: 'Kurang Ramah' });

    const data = {
      node1: {
        label: { ...node1Label },
        produk: { ...node1Produk },
        promosi: { ...node1Promosi },
        tempat: { ...node1Tempat },
        harga: { ...node1Harga },
        pelayanan: { ...node1Pelayanan }
      },
      node2: {
        promosi: { ...node2Promosi },
        tempat: { ...node2Tempat },
        harga: { ...node2Harga },
        pelayanan: { ...node2Pelayanan }
      },
      node3: {
        promosi: { ...node3Promosi },
        tempat: { ...node3Tempat },
        harga: { ...node3Harga }
      }
    };

    return data;
  }
}
