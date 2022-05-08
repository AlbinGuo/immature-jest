import axios from "axios";
 
export const fetchData = (fn) => {
  axios.get('https://api.douban.com/v2/movie/subject/2')
    .then(res => {
      fn
    })
}