import { HTTPService } from './http.service';

const API_URL = 'http://192.168.34.27:8080/';
let jwt = '';

export const getJwt = () => {
    if (jwt) {
        return jwt;
    }
    return '';
}

export const login = async (email, password) => {
    const jwtToken = await HTTPService.post(API_URL + "auth/login", { email, password });
    jwt = jwtToken;
    return jwtToken;
}

export const register = async (email, password, confirmPassword) => {
    const response = await HTTPService.post(API_URL + "auth/register", { email, password, confirmPassword });
    return response;
}