document.addEventListener('DOMContentLoaded', function () {
    const toggleHeaderButton = document.getElementById('toggle_header');
    const headerElement = document.querySelector('header');
  
    toggleHeaderButton.addEventListener('click', function () {
      // Check if the header currently has the "red" class
      if (headerElement.classList.contains('red')) {
        // If it has the "red" class, remove it and add the "green" class
        headerElement.classList.remove('red');
        headerElement.classList.add('green');
      } else {
        // If it has the "green" class or no class, remove it and add the "red" class
        headerElement.classList.remove('green');
        headerElement.classList.add('red');
      }
    });
  });
  