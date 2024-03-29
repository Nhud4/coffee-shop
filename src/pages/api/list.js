import Data from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const dataDomain = new Data();
const wrapper = new Wrapper();

export default async function list(req, res){
  const payload = { ...req.query };
  const result = await dataDomain.list(payload);
  if(result.err)return wrapper.responseError(res, result.err);

  const data = result.data.map((item) => ({
    ...item,
    id: item._id,
    tokenUse: item.tokenUse? 'Digunakan':'Belum Digunakan'
  }));

  return wrapper.response(res, 200, {
    message: 'success',
    success: true,
    code: 200,
    data: data,
    meta: result.meta
  });
}
