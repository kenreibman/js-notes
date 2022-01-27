// "Blog Post" -- Mimics fetching data from a server

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

function createPost(post, callback) { // Takes in new post,
    setTimeout(() => { // Creating a setTimeout (2000ms) b/c hypothetically dealing w/server.
        posts.push(post); // Push on a new post to the posts array
        callback();
    }, 2000); // Async comes in play here b/c the DOM loaded in 1000ms.
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);