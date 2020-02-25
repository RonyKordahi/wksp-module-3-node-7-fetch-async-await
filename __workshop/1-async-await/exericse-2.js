// Exercise 2
// ----------

const doublesLater = (number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(number * 2);
    }, 2000)
    })
}

const doTheMath = async () => {
    try {
        const x = await doublesLater(3);
        const a = await doublesLater(10);
        const b = await doublesLater(20);
        const c = await doublesLater(30);
        console.log(x + a + b + c);
    }
    catch(error) {
        console.log("nope!");
    }
}

doTheMath();