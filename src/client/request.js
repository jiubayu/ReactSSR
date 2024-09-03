import axios from "axios";

const request = axios.create({
  baseURL: '/'
});

export default request;

// 客户端 request('/api/user') 
// 服务端 request('http://localhost:4000/api/user')