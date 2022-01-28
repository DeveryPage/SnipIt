import { getToken } from "./authManager";

const baseUrl = '/api/snipit';

export const getAllSnipIts = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get snipIts.")
            }
        });
    });
};

export const deleteSnipIt = (snipit) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${snipit.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    })
}