// Видео 15

const wait = (ms, callback)=>{
    const now = new Date().getTime()

    while (new Data().getTime() < now + ms){

    }
    callback()
}

console.log(1)
wait(5000, () => console.log(2))
console.log(3)

async function getSomething() {
    return new Promise((fulfill) => {
        setTimeout(() =>{
            fulfill('Hello');
        }, 3000)
    })
}

console.log('New');

const something = await getSomething()

console.log(something)
console.log('End');