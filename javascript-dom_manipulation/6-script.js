document.addEventListener('DOMContentLoaded', function () {
    const characterElement = document.getElementById('character');
    const apiUrl = 'https://swapi-api.hbtn.io/api/people/5/?format=json';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Extract the character name from the response
        const characterName = data.name;
  
        // Display the character name in the 'character' element
        characterElement.textContent = characterName;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  