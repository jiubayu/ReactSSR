import axios from "axios";

const request = (req) => axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    cookie: req.get('cookie')
  }
});

export default request;

// 服务端走的是http://localhost:4000