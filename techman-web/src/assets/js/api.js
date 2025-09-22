// This file contains functions for making API calls to the back-end, handling data retrieval and submission.

const API_BASE_URL = 'http://localhost:3000'; // Adjust the base URL as needed

async function fetchEquipments() {
    try {
        const response = await fetch(`${API_BASE_URL}/equipamentos`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const equipments = await response.json();
        return equipments;
    } catch (error) {
        console.error('Error fetching equipments:', error);
    }
}

async function fetchEquipmentById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/equipamentos/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const equipment = await response.json();
        return equipment;
    } catch (error) {
        console.error('Error fetching equipment:', error);
    }
}

async function addComment(equipmentId, comment) {
    try {
        const response = await fetch(`${API_BASE_URL}/equipamentos/${equipmentId}/comentarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newComment = await response.json();
        return newComment;
    } catch (error) {
        console.error('Error adding comment:', error);
    }
}

async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error logging in:', error);
    }
}