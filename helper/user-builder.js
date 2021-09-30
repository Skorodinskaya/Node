const createUser = (name, age) => {
    return {
        name,
        age,
        greeting: () => {
            console.log(`Hello, ${name}`)
        }
    }
}
module.exports = {createUser}