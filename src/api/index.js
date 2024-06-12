import axios from "axios";
const instance = axios.create({
    // baseURL: 'https://dummyjson.com'
    baseURL:'https://tour.touristan-bs.uz/v1/'
})

export default instance