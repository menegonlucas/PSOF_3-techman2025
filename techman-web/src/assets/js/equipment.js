// This file contains functions related to equipment management, such as fetching equipment data and handling updates.

const apiUrl = 'http://localhost:3000/api/equipamentos'; // Update with your actual API endpoint

// Fetch all equipment data
async function fetchEquipments() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const equipments = await response.json();
        displayEquipments(equipments);
    } catch (error) {
        console.error('Error fetching equipment data:', error);
    }
}

// Display equipment data on the page
function displayEquipments(equipments) {
    const equipmentsList = document.getElementById('equipments-list');
    equipmentsList.innerHTML = ''; // Clear existing content

    equipments.forEach(equipment => {
        const equipmentItem = document.createElement('div');
        equipmentItem.className = 'equipment-item';
        equipmentItem.innerHTML = `
            <h3>${equipment.name}</h3>
            <p>${equipment.description}</p>
            <button onclick="viewEquipmentDetail(${equipment.id})">View Details</button>
        `;
        equipmentsList.appendChild(equipmentItem);
    });
}

// View details of a specific equipment
function viewEquipmentDetail(id) {
    window.location.href = `equipment-detail.html?id=${id}`;
}

// Initialize the equipment management functions
document.addEventListener('DOMContentLoaded', () => {
    fetchEquipments();
});