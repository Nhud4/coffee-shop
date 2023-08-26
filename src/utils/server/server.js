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

  async update(params){
    const endPoint = `/api/update/${params}`;
    const options ={
      method: 'PUT'
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
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
    const endPoint = '/api/summary';
    const options ={
      method: 'GET'
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

}
