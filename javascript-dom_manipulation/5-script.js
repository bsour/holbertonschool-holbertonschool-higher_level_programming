document.addEventListener('DOMContentLoaded', function () {
    const updateHeaderButton = document.getElementById('update_header');
    const headerElement = document.querySelector('header');
  
    updateHeaderButton.addEventListener('click', function () {
      // Update the text content of the header element
      headerElement.textContent = 'New Header!!!';
    });
  });
  