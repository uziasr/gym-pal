import axios from 'axios'


export const axiosWithAuthorization = (token) => {
    return axios.create({
        // baseURL: "https://gym-buddy-flask.herokuapp.com",
        baseURL:"http://192.168.1.3:5000",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}