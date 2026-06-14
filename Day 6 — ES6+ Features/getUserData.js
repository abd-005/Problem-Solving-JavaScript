// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.

const getUserData = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj = {id, name:`Test User ${id}`}
            resolve(obj)
        }, 500);
    })
}

async function test() {
    const user = await getUserData(2)

    console.log(user)
}

test()