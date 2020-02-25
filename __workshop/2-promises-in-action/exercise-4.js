const request = require('request-promise');

const options = {
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
        "Accept": "application/json"
    }
}

const getTronaldDump = async () => {
    try {
        const response = await request(options)
            const quote = JSON.parse(response)
            console.log(quote.value)
    }
    catch(error) {
        console.log("nope");
    }
}

getTronaldDump();