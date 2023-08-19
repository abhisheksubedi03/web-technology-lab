
document.addEventListener("DOMContentLoaded", function() {
    const fetchButton = document.getElementById("fetchButton");
    const usernameInput = document.getElementById("username");
    const resultDiv = document.getElementById("result");
  
    fetchButton.addEventListener("click", async function() {
      const username = usernameInput.value.trim();
      if (username === "") {
        resultDiv.innerHTML = "Please enter a GitHub username.";
        return;
      }
  
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.status === 404) {
          resultDiv.innerHTML = "User not found.";
        } else {
          const userData = await response.json();
          resultDiv.innerHTML = `
            <p><h3>Name:</h3> ${userData.name}</p>
            <p><h3>Username:</h3> ${userData.login}</p>
            <p><h3>Location:</h3> ${userData.location || "N/A"}</p>
            <p><h3>Followers:</h3> ${userData.followers}</p>
            <p><h3>Following:</h3> ${userData.following}</p>
            <p><h3>Public Repositories:</h3> ${userData.public_repos}</p>
          `;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        resultDiv.innerHTML = "An error occurred while fetching data.";
      }
    });
  });
  