const _apiUrl = "/api/snipItTag"

export const getAllSnipItTags = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const addSnipItTag = (snipItTag) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(snipItTag),
    })
}

export const getSnipItTags = (snipItId) => {
    return fetch(`${_apiUrl}/${snipItId}`)
        .then((res) => res.json())
}

export const getSnipItTag = (snipItTagId) => {
    return fetch(`${_apiUrl}/${snipItTagId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
};


export const updateSnipItTags = (id, selectedTagIds) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedTagIds),
    })
}

export const getSnipItTagsBySnipItId = (snipItId) => {
    return fetch(_apiUrl + `/getSnipItTags/${snipItId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((resp) => resp.json());
};

