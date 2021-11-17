import axios from "axios";
import { BASE_URL } from "../base";
axios.defaults.baseURL = BASE_URL

// Login user
export const loginUser = async (obj) => {
    try {
        const res = await axios.post('/user/login', obj)
    } catch (error) {
        console.log('error occurs', error.message);

    }
}