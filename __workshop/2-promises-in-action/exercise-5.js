const request = require('request-promise');

const getGeekJoke = async () => {
    try {
        const response = await request("https://geek-jokes.sameerkumar.website/api")
            const joke = JSON.parse(response)
            console.log(joke);
    }
    catch(error) {
        console.log("nope");
    }
}

getGeekJoke();