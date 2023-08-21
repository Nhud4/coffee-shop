import Rumus from './rumus';

const rumus = new Rumus();

export default class Node2{
  async countPromosi(payload){
    try{
      const { data, entorpyNode, node1 } = payload;

      const valeu = ['Menarik', 'Kurang Menarik'];
      const label = ['Puas', 'Tidak Puas'];

      const dataNode = data.filter(({ produk }) => produk === node1);
      const valeu1 = dataNode.filter(({ promosi }) => promosi === valeu[0]);
      const valeu2 = dataNode.filter(({ promosi }) => promosi === valeu[1]);
      const labelValeuP1 = dataNode.filter(({ promosi, kepuasan }) => promosi === valeu[0] && kepuasan === label[0]);
      const labelValeuP2 = dataNode.filter(({ promosi, kepuasan }) => promosi === valeu[1] && kepuasan === label[0]);
      const labelValeuT1 = dataNode.filter(({ promosi, kepuasan }) => promosi === valeu[0] && kepuasan === label[1]);
      const labelValeuT2 = dataNode.filter(({ promosi, kepuasan }) => promosi === valeu[1] && kepuasan === label[1]);

      const entorpy1 = await rumus.entorpy({
        value1: valeu1.length,
        value2: labelValeuP1.length,
        value3: labelValeuT1.length
      });

      const entorpy2 = await rumus.entorpy({
        value1: valeu2.length,
        value2: labelValeuP2.length,
        value3: labelValeuT2.length
      });

      const gainPayload = [
        {
          kasus1: dataNode.length,
          kasus2: valeu1.length,
          entorpy1: entorpy1,
          entorpy2: entorpyNode
        },
        {
          kasus1: dataNode.length,
          kasus2: valeu2.length,
          entorpy1: entorpy2,
          entorpy2: entorpyNode
        }
      ];

      const gain = await rumus.gain(gainPayload);

      const filterPromosi = {
        value1: valeu1.length,
        value2: valeu2.length,
        labelP1: labelValeuP1.length,
        labelP2: labelValeuP2.length,
        labelT1: labelValeuT1.length,
        labelT2: labelValeuT2.length,
        entorpy1: entorpy1,
        entorpy2: entorpy2,
        gain: gain
      };

      return filterPromosi;
    }catch(err){
      return err;
    }
  }

  async countTempat(payload){
    try{
      const { data, entorpyNode, node1 } = payload;

      const valeu = ['Nyaman', 'Kurang Nyaman'];
      const label = ['Puas', 'Tidak Puas'];

      const dataNode = data.filter(({ produk }) => produk === node1);
      const valeu1 = dataNode.filter(({ tempat }) => tempat === valeu[0]);
      const valeu2 = dataNode.filter(({ tempat }) => tempat === valeu[1]);
      const labelValeuP1 = dataNode.filter(({ tempat, kepuasan }) => tempat === valeu[0] && kepuasan === label[0]);
      const labelValeuP2 = dataNode.filter(({ tempat, kepuasan }) => tempat === valeu[1] && kepuasan === label[0]);
      const labelValeuT1 = dataNode.filter(({ tempat, kepuasan }) => tempat === valeu[0] && kepuasan === label[1]);
      const labelValeuT2 = dataNode.filter(({ tempat, kepuasan }) => tempat === valeu[1] && kepuasan === label[1]);

      const entorpy1 = await rumus.entorpy({
        value1: valeu1.length,
        value2: labelValeuP1.length,
        value3: labelValeuT1.length
      });

      const entorpy2 = await rumus.entorpy({
        value1: valeu2.length,
        value2: labelValeuP2.length,
        value3: labelValeuT2.length
      });

      const gainPayload = [
        {
          kasus1: dataNode.length,
          kasus2: valeu1.length,
          entorpy1: entorpy1,
          entorpy2: entorpyNode
        },
        {
          kasus1: dataNode.length,
          kasus2: valeu2.length,
          entorpy1: entorpy2,
          entorpy2: entorpyNode
        }
      ];

      const gain = await rumus.gain(gainPayload);

      const filterTempat = {
        value1: valeu1.length,
        value2: valeu2.length,
        labelP1: labelValeuP1.length,
        labelP2: labelValeuP2.length,
        labelT1: labelValeuT1.length,
        labelT2: labelValeuT2.length,
        entorpy1: entorpy1,
        entorpy2: entorpy2,
        gain: gain
      };

      return filterTempat;
    }catch(err){
      return err;
    }
  }

  async countHarga(payload){
    try{
      const { data, entorpyNode, node1 } = payload;
      const valeu = ['Murah', 'Sedang', 'Mahal'];
      const label = ['Puas', 'Tidak Puas'];

      const dataNode = data.filter(({ produk }) => produk === node1);
      const valeu1 = dataNode.filter(({ harga }) => harga === valeu[0]);
      const valeu2 = dataNode.filter(({ harga }) => harga === valeu[1]);
      const valeu3 = dataNode.filter(({ harga }) => harga === valeu[2]);
      const labelValeuP1 = dataNode.filter(({ harga, kepuasan }) => harga === valeu[0] && kepuasan === label[0]);
      const labelValeuP2 = dataNode.filter(({ harga, kepuasan }) => harga === valeu[1] && kepuasan === label[0]);
      const labelValeuP3 = dataNode.filter(({ harga, kepuasan }) => harga === valeu[2] && kepuasan === label[0]);
      const labelValeuT1 = dataNode.filter(({ harga, kepuasan }) => harga === valeu[0] && kepuasan === label[1]);
      const labelValeuT2 = dataNode.filter(({ harga, kepuasan }) => harga === valeu[1] && kepuasan === label[1]);
      const labelValeuT3 = dataNode.filter(({ harga, kepuasan }) => harga === valeu[2] && kepuasan === label[1]);

      const entorpy1 = await rumus.entorpy({
        value1: valeu1.length,
        value2: labelValeuP1.length,
        value3: labelValeuT1.length
      });

      const entorpy2 = await rumus.entorpy({
        value1: valeu2.length,
        value2: labelValeuP2.length,
        value3: labelValeuT2.length
      });

      const entorpy3 = await rumus.entorpy({
        value1: valeu3.length,
        value2: labelValeuP3.length,
        value3: labelValeuT3.length
      });

      const gainPayload = [
        {
          kasus1: dataNode.length,
          kasus2: valeu1.length,
          entorpy1: entorpy1,
          entorpy2: entorpyNode
        },
        {
          kasus1: dataNode.length,
          kasus2: valeu2.length,
          entorpy1: entorpy2,
          entorpy2: entorpyNode
        },
        {
          kasus1: dataNode.length,
          kasus2: valeu3.length,
          entorpy1: entorpy3,
          entorpy2: entorpyNode
        }
      ];

      const gain = await rumus.gain(gainPayload);

      const filterHarga = {
        value1: valeu1.length,
        value2: valeu2.length,
        valeu3: valeu3.length,
        labelP1: labelValeuP1.length,
        labelP2: labelValeuP2.length,
        labelP3: labelValeuP3.length,
        labelT1: labelValeuT1.length,
        labelT2: labelValeuT2.length,
        labelT3: labelValeuT3.length,
        entorpy1: entorpy1,
        entorpy2: entorpy2,
        entorpy3: entorpy3,
        gain: gain
      };

      return filterHarga;
    }catch(err){
      return err;
    }
  }

  async countPelayanan(payload){
    try{
      const { data, entorpyNode, node1 } = payload;
      const valeu = ['Ramah', 'Kurang Ramah'];
      const label = ['Puas', 'Tidak Puas'];

      const dataNode = data.filter(({ produk }) => produk === node1);
      const valeu1 = dataNode.filter(({ pelayanan }) => pelayanan === valeu[0]);
      const valeu2 = dataNode.filter(({ pelayanan }) => pelayanan === valeu[1]);
      const labelValeuP1 = dataNode.filter(({ pelayanan, kepuasan }) => pelayanan === valeu[0] && kepuasan === label[0]);
      const labelValeuP2 = dataNode.filter(({ pelayanan, kepuasan }) => pelayanan === valeu[1] && kepuasan === label[0]);
      const labelValeuT1 = dataNode.filter(({ pelayanan, kepuasan }) => pelayanan === valeu[0] && kepuasan === label[1]);
      const labelValeuT2 = dataNode.filter(({ pelayanan, kepuasan }) => pelayanan === valeu[1] && kepuasan === label[1]);

      const entorpy1 = await rumus.entorpy({
        value1: valeu1.length,
        value2: labelValeuP1.length,
        value3: labelValeuT1.length
      });

      const entorpy2 = await rumus.entorpy({
        value1: valeu2.length,
        value2: labelValeuP2.length,
        value3: labelValeuT2.length
      });

      const gainPayload = [
        {
          kasus1: dataNode.length,
          kasus2: valeu1.length,
          entorpy1: entorpy1,
          entorpy2: entorpyNode
        },
        {
          kasus1: dataNode.length,
          kasus2: valeu2.length,
          entorpy1: entorpy2,
          entorpy2: entorpyNode
        }
      ];

      const gain = await rumus.gain(gainPayload);

      const filterPelayanan = {
        value1: valeu1.length,
        value2: valeu2.length,
        labelP1: labelValeuP1.length,
        labelP2: labelValeuP2.length,
        labelT1: labelValeuT1.length,
        labelT2: labelValeuT2.length,
        entorpy1: entorpy1,
        entorpy2: entorpy2,
        gain: gain
      };

      return filterPelayanan;
    }catch(err){
      return err;
    }
  }
}
