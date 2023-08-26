import Data from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const dataDomain = new Data();
const wrapper = new Wrapper();

export default async function Summary(req, res){
  const result = await dataDomain.summary();
  if(result.err) return wrapper.responseError(res, result.err);

  return wrapper.response(res, 200, {
    message: 'success to get data summary',
    success: true,
    code: 200,
    data: result
  });
}
