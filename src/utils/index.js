const axios = require('axios').default;

export const shorten = async (longUrl) => {
    let data = await axios({
        method: 'post',
        url: 'https://url-b.herokuapp.com/api/url/shorten',
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
