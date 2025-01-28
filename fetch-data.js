document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserData() {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        const dataContainer = document.getElementById("api-data");

        try {
            // Fetch user data
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear existing content
            dataContainer.innerHTML = "";

            // Create and append user list
            const userList = document.createElement("ul");
            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = "Failed to load user data.";
            console.error("Error fetching user data:", error);
        }
    }

    // Run the function when the DOM is fully loaded
    fetchUserData();
});
