import { HTTPService } from './http.service';

const API_URL = 'http://localhost:8081/';
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
}

export const register = (email, password, confirmPassword) => {

}