// Placeholder for emojis
let emojis = [];

// Fetch data from emoji.js or any external source
document.addEventListener("DOMContentLoaded", () => {
    fetchEmojis();
});

// Fetch emoji data from emoji.js
function fetchEmojis() {
    emojis = emojiData; // emojiData is from emoji.js
    displayEmojis(emojis);
}

// Display all emojis initially
function displayEmojis(emojiList) {
    const emojiContainer = document.getElementById("emojiContainer");
    emojiContainer.innerHTML = "";

    emojiList.forEach(emoji => {
        const emojiElement = document.createElement("span");
        emojiElement.classList.add("emoji-item");
        emojiElement.textContent = emoji.symbol;
        emojiContainer.appendChild(emojiElement);
    });
}

// Filter emojis based on search input
function filterEmojis() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const filteredEmojis = emojis.filter(emoji =>
        emoji.name.toLowerCase().includes(searchQuery)
    );
    displayEmojis(filteredEmojis);
}