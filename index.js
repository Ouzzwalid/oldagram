const main = document.getElementById("main")
const likeBtn = document.getElementsByClassName("like")
const likesEl = document.getElementsByClassName("likes")
const postImg = document.getElementsByClassName("post-img")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        likedPost : false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        likedPost : false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        likedPost : false
    }
]

for (let i = 0; i < posts.length; i++){
    main.innerHTML += `
                        <section class="post-section">
                            <div class="post-profile-info">
                                <img
                                src="${posts[i].avatar}"
                                alt="${posts[i].name} avatar"
                                class="avatar"
                                />
                                <div class="profile-info">
                                <p class="name bold">${posts[i].name}</p>
                                <p class="location small-text">${posts[i].location}</p>
                                </div>
                            </div>
                            <div class="post">
                                <img src="${posts[i].post}" alt="" class="post-img" />
                            </div>
                            <div class="post-infos">
                                <div class="icons">
                                <img src="images/icon-heart.png" alt="" class="icon like"  />
                                <img
                                    src="images/icon-comment.png"
                                    alt=""
                                    class="icon comment"
                                />
                                <img src="images/icon-dm.png" alt="" class="icon dm" " />
                                </div>
                                <div class="likes bold">
                                <p>${posts[i].likes} likes</p>
                                </div>
                                <div class="comments">
                                <p class="comment">
                                    <span class="username bold" id="username">${posts[i].username}</span> ${posts[i].comment}
                                </p>
                                </div>
                            </div>
                            </section>`
}
for (let i = 0; i < likeBtn.length; i++){
    likeBtn[i].addEventListener('click', e => renderLikes(i))
}
for (let i = 0; i < postImg.length; i++){
    postImg[i].addEventListener('dblclick', e => renderLikes(i))
}
function renderLikes(i){
    if (!posts[i].likedPost){
        posts[i].likes++
        likesEl[i].innerHTML = `<p>${posts[i].likes} likes</p>`
        likeBtn[i].src = "images/icon-red-heart.png"
        posts[i].likedPost = true
    }else {
        posts[i].likes--
        likesEl[i].innerHTML = `<p>${posts[i].likes} likes</p>`
        likeBtn[i].src = "images/icon-heart.png"
        posts[i].likedPost = false
    }
}