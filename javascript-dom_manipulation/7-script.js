document.addEventListener('DOMContentLoaded', function () {
    const listMovies = document.getElementById('list_movies');
    const apiUrl = 'https://swapi-api.hbtn.io/api/films/?format=json';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Extract the movie titles from the response
        const movies = data.results;
  
        // Iterate through the movie titles and add them to the list
        movies.forEach(movie => {
          const listItem = document.createElement('li');
          listItem.textContent = movie.title;
          listMovies.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  