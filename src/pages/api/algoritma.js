import Algoritma from '@/domain/algoritma';
import Wrapper from '@/utils/helper/wrapper';

const algoritmaCount = new Algoritma();
const wrapper = new Wrapper();

export default async function algoritma(req, res){
  const data = await algoritmaCount.test();

  return wrapper.response(res, 200, {
    message: 'success',
    success: true,
    code: 200,
    data: data
  });
}
