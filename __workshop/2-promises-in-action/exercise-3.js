const request = require('request-promise');

const getDadJoke = async () => {
    return request("https://icanhazdadjoke.com/slack")
        .then(JSON.parse)
        .then(data => {
            return data.attachments[0].text;
        })            
}

const getTheJoke = async () => {
    try {
        const joke = await getDadJoke();
        console.log(joke);
    }
    catch (error) {
        console.log("not funny");
    }
}

getTheJoke();