function loadUser(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data =>  displayData(data))
}

function displayData(posts){
    const postConatiner = document.getElementById('post-container');
    for(const post of posts){
        const divPosts = document.createElement('div');
        divPosts.classList.add('post');
        divPosts.innerHTML = `
                    <h4>User-${post.userId} </h4>
                    <h5>Post:${post.title}</h5>
                    <p>Post Description: ${post.body}</p>
        `;
    postConatiner.appendChild(divPosts);
    }
};

loadUser();

