import authService from './auth.service';

class HTTPService {
    async get(url) {
        return await fetch({
            url,
            headers: {
                Authorization: authService.getJwt(),
            },
            method: "GET",
        })
    }

    post() {

    }
}