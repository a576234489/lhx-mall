import axios from 'axios';

export function request(config) {
  const instant = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instant.interceptors.request.use(config=>{
    return config;
  },err=>{
    console.log(err)
  })
  instant.interceptors.response.use(res=>{
    return res.data;
  },err=>{
    console.log(err);
  })
  return instant(config)
}
