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

export const getSnipIt = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json())
    })
}



export const updateSnipIt = (snipit) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${snipit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(snipit),
        })
    })
}

export const addSnipIt = (snipit) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(snipit),
        }).then(res => res.json());
    })
}