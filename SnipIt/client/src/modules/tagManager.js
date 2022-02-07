import { getToken } from "./authManager";

const baseUrl = '/api/tag';

export const getAllTags = () => {
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
                throw new Error("An unknown error occurred while trying to get Tags.")
            }
        });
    });
};

export const deleteTag = (tag) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${tag.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    })
}

export const getTag = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json())
    })
}



export const updateTag = (tag) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${tag.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(tag),
        }).then(getAllTags());
    })
}

export const addTag = (tag) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(tag),
        }).then(res => res.json());
    })
}