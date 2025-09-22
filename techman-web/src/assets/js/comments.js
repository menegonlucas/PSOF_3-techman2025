// This file manages comment-related functionality, including fetching and submitting comments.

const apiUrl = 'http://localhost:3000/api/comments'; // Adjust the URL as needed

// Function to fetch comments for a specific equipment
async function fetchComments(equipmentId) {
    try {
        const response = await fetch(`${apiUrl}?equipmentId=${equipmentId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const comments = await response.json();
        displayComments(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

// Function to display comments on the page
function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = ''; // Clear existing comments

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <p><strong>${comment.user}</strong>: ${comment.text}</p>
            <p><em>${new Date(comment.date).toLocaleString()}</em></p>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

// Function to submit a new comment
async function submitComment(equipmentId, user, text) {
    const newComment = {
        equipmentId,
        user,
        text,
        date: new Date().toISOString()
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const savedComment = await response.json();
        displayComments([savedComment]); // Display the newly added comment
    } catch (error) {
        console.error('Error submitting comment:', error);
    }
}

// Event listener for the comment form submission
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const equipmentId = this.dataset.equipmentId; // Assuming the form has a data attribute for equipment ID
    const user = this.user.value; // Assuming there's an input for user
    const text = this.comment.value; // Assuming there's a textarea for the comment

    submitComment(equipmentId, user, text);
});

// Example usage: Fetch comments for a specific equipment when the page loads
const equipmentId = '123'; // Replace with actual equipment ID
fetchComments(equipmentId);