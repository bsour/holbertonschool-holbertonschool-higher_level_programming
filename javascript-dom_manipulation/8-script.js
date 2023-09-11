document.addEventListener('DOMContentLoaded', function () {
    const helloElement = document.getElementById('hello');
    const apiUrl = 'https://hellosalut.stefanbohacek.dev/?lang=fr';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Display the translation of "hello" in the 'hello' element
        helloElement.textContent = data.hello;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  