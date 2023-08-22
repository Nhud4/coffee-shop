export default class Server{
  async login(username, password){
    const data = {
      username: username,
      password: password
    };
    const JSONdata = JSON.stringify(data);
    const endPoint = '/api/login';
    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

  async listData(params){
    const endPoint = `/api/list?page=${params.page}&size=${params.size}&sort=name`;
    const options ={
      method: 'GET',
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

  async inputData(data){
    const JSONdata = JSON.stringify(data);
    const endPoint = '/api/insert';
    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

  async detailData(params){
    const endPoint = `/api/data/detail/${params}`;
    const options ={
      method: 'GET'
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result.data;
  }

  async deleteData(params){
    const endPoint = `/api/data/deleted/${params}`;
    const options ={
      method: 'GET'
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

  async summary(){
    const endPoint = '/api/data/summary';
    const options ={
      method: 'GET'
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

}
