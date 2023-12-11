document.getElementById('load-posts').addEventListener('click', function () {
    // Simulate loading new posts
    var postsContainer = document.getElementById('posts-container');
    var newPost = document.createElement('article');
    newPost.innerHTML = `
        <h2>New Post Title</h2>
        <p class="meta">Published on: <time datetime="2023-12-12">December 12, 2023</time> | Author: Jane Doe</p>
        <p>New blog post content goes here...</p>
    `;
    postsContainer.appendChild(newPost);
});
