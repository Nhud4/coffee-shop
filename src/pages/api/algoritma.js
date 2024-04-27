import Algoritma from '@/domain/algoritma';
import Data from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const algoritmaCount = new Algoritma();
const dataDomain = new Data();
const wrapper = new Wrapper();

export default async function algoritma(req, res){
  const data = await algoritmaCount.test();
  const datatest = await dataDomain.decision();

  return wrapper.response(res, 200, {
    message: 'success',
    success: true,
    code: 200,
    data: datatest
  });
}
