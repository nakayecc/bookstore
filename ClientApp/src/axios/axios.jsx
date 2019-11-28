import axios from "axios";
let connection = axios.create({
    baseURL: 'api/'
 

   
});

export default connection;