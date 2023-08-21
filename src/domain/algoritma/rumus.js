export default class Rumus{
  async entorpy(payload){
    try{
      const { value1, value2, value3 } = payload;

      const step1 = (-(value2/value1) * Math.log2(value2/value1)) || 0;
      const step2 = (-(value3/value1) * Math.log2(value3/value1)) || 0;

      return step1 + step2;
    }catch(err){
      return err;
    }
  }

  async gain(payload){
    try{
      let data = 0;
      for (let i = 0; i < payload.length; i++) {
        const step1 = ((payload[i].kasus2 / payload[i].kasus1) * payload[i].entorpy1 )|| 0;
        data += step1;
      }

      const step2 = payload[0].entorpy2 - data;

      return step2;
    }catch(err){
      return err;
    }
  }
}
