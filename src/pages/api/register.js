import Auth from '@/domain/auth';
import Wrapper from '@/utils/helper/wrapper';

const authDomain = new Auth();
const wrapper = new Wrapper();

export default async function register(req, res){
  const payload = { ...req.body };
  const result = await authDomain.register(payload);
  if(result.err)return wrapper.responseError(res, result.err);
  delete payload.password;

  return wrapper.response(res, 201, {
    message: 'register success',
    success: true,
    code: 201,
    data: { ...payload },
  });
}
