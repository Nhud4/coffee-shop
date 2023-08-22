import Data from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const dataDomain = new Data();
const wrapper = new Wrapper();

export default async function insert(req, res){
  const payload = { ...req.body };
  const result = await dataDomain.insertData(payload);
  if(result.err)return wrapper.responseError(res, result.err);

  return wrapper.response(res, 201, {
    message: 'success',
    success: true,
    code: 201,
    data: { ...payload }
  });
}
