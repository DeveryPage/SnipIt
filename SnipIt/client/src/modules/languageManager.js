import { getToken } from "./authManager";

const baseUrl = '/api/language';

export const getAllLanguages = () => {
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
                throw new Error("An unknown error occurred while trying to get languages.")
            }
        });
    });
};

export const deleteLanguage = (language) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${language.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    })
}

export const getLanguage = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json())
    })
}



export const updateLanguage = (language) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${language.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(language),
        }).then(getAllLanguages());
    })
}

export const addLanguage = (language) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(language),
        }).then(res => res.json());
    })
}