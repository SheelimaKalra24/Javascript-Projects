let likeCount = 0;

const likeButton = document.querySelector('.like-btn');
const likeCountElement = document.getElementById('like-count');
const commentInput = document.getElementById('comment-input');
const postCommentButton = document.getElementById('post-comment-btn');
const commentsSection = document.querySelector('.comments');

likeButton.addEventListener('click', function () {
    likeCount++;
    likeCountElement.textContent = likeCount;
});

postCommentButton.addEventListener('click', function () {
    const newComment = commentInput.value;
    if (newComment.trim() !== '') {
        const commentElement = document.createElement('p');
        commentElement.innerHTML = `<strong>You:</strong> ${newComment}`;
        commentsSection.appendChild(commentElement);
        commentInput.value = ''; // Clear the input field
    }
});