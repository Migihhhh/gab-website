// THIS DOESNT WORK, ALTHOUGH THE CODE IS USEFUL FOR CONNNECTING THE DATABASE SO ILL PUT IT HERE JUST IN CASE, BTW IT IS CONNECTED SO DW

const properties = [
    {
        title: "Beautiful Family Home",
        price: "$350,000",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2500,
        yearBuilt: 2020,
        lotSize: "0.25"
    },
    {
        title: "Modern City Apartment",
        price: "$250,000",
        bedrooms: 2,
        bathrooms: 1,
        sqft: 1200,
        yearBuilt: 2019,
        lotSize: "N/A"
    },
    {
        title: "Cozy Suburban House",
        price: "$450,000",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3000,
        yearBuilt: 2018,
        lotSize: "0.3"
    }
];

//yes this is chatgpt, idk how to fix it LMAO

document.addEventListener("DOMContentLoaded", function () {
    const inquireButtons = document.querySelectorAll(".inquire-button"); // Adjust class if needed
    const detailPage = document.getElementById("detailPage");
    const backButton = document.getElementById("backButton");
    const mainContent = document.getElementById("mainContent"); // Adjust based on your structure

    // Add click event to all inquire buttons
    inquireButtons.forEach(button => {
        button.addEventListener("click", function () {
            detailPage.style.display = "grid"; // Show the details page
            if (mainContent) {
                mainContent.style.display = "none"; // Hide main content if necessary
            }
        });
    });

    // Add event listener to the back button
    if (backButton) {
        backButton.addEventListener("click", function () {
            detailPage.style.display = "none"; // Hide details page
            if (mainContent) {
                mainContent.style.display = "block"; // Show main content again
            }
        });
    }
});

function showDetail(propertyIndex) {
    const property = properties[propertyIndex];
    document.getElementById('propertyTitle').textContent = property.title;
    document.getElementById('propertyPrice').textContent = property.price;
    
    const details = `
        <h3>Property Details</h3>
        <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
        <p><strong>Square Feet:</strong> ${property.sqft}</p>
        <p><strong>Year Built:</strong> ${property.yearBuilt}</p>
        <p><strong>Lot Size:</strong> ${property.lotSize} acres</p>
        <h3>Description</h3>
        <p>This beautiful property features an open concept living area, updated kitchen with stainless steel appliances, and a spacious layout perfect for modern living. Located in a desirable neighborhood with excellent amenities nearby.</p>
        <h3>Features</h3>
        <ul>
            <li>Open concept floor plan</li>
            <li>Updated kitchen</li>
            <li>Modern appliances</li>
            <li>Spacious rooms</li>
            <li>Great location</li>
            <li>Ample parking</li>
        </ul>
    `;
    document.getElementById('propertyDetails').innerHTML = details;
    
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('detailPage').style.display = 'grid';
}

function showMain() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('detailPage').style.display = 'none';
}

function updateMainImage(src) {
    document.getElementById('mainImage').src = src;
}

