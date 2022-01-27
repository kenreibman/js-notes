const posts = [ // Create an array
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPosts() { // Create a funciton called getPosts
    setTimeout(() => { // Callback function followed by delay in 1000ms.
        let output = ''; // 
        posts.forEach((post, index) => {  // Loop through post, takes post, index parameter
            output += `<li>${post.title}</li>`; // +=(append)
        });
        document.body.innerHTML = output; // Insert it into the body
    }, 1000);

    // * get posts from array, forEach loops through, put the elements in the output variable, then outputting that on the page with innerHTML.
}

function createPost(post) { 
    // Run a promise 
    return new Promise((resolve, reject) => {  // Promise takes in two parameters
        setTimeout(() => {
            posts.push(post); 

            // Resolve
            const error = false;
            
            if(!error) { // if no error
                resolve();
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000);
    });
}



// Create Post Three


createPost({ title: 'Post Three', body: 'This is post three'}) // We don't pass in a callback anymore (getPosts)
.then(getPosts)
.catch(err => console.log(err)); // Fixes uncaught promise in console.


// Async / Await



async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three'}) // Waiting for createPost to be called before getPost is called
    .then(getPosts)

    getPosts();
}

init();



// Async / Await with Fetch

async function fetchUsers() {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');

    // Call res.json

    const data = await res.json()

    console.log(data);
}

fetchUsers();



// Promise.all

// Creating a bunch of promises
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res => 
res.json()
); // Use two .then when using fetch, first is format, next is data.

Promise.all([promise1, promise2, promise3, promise4])
.then(values => 
    console.log(values)
); 

