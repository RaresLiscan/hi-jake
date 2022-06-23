import * as authService from './auth.service';

export const HTTPService = {
    get: async (url) => {
        return await fetch({
            url,
            headers: {
                Authorization: authService.getJwt(),
            },
            method: "GET",
        })
    },

    post: async (url, body) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: authService.getJwt(),
                Accept: "application/json",
                cors: 'cors',
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json());
        return response;
    },

    put: async (url, body) => {
        return await fetch({
            url,
            headers: {
                Authorization: authService.getJwt(),
            },
            body: body,
            method: "PUT",
        })
    },

    delete: async (url) => {
        return await fetch({
            url,
            headers: {
                Authorization: authService.getJwt(),
            },
            method: "DELETE",
        })
    }
}