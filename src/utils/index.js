const axios = require('axios').default;

export const shorten = async (longUrl) => {
    console.log(longUrl);
    let data = await axios({
        method: 'post',
        url: '/api/url/shorten',
        data: JSON.stringify(longUrl),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });

    return data;
};
