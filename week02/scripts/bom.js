document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('favchap');
    const buttonElement = document.getElementById('addButton');
    const listElement = document.getElementById('list');
  
    buttonElement.addEventListener('click', () => {
      // Check if the input is not blank
      if (inputElement.value.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = inputElement.value;
  
        // Create a delete button for the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
  
        // Append the list item to the list
        listElement.appendChild(li);
  
        // Add event listener to the delete button to remove the list item
        deleteButton.addEventListener('click', () => {
          listElement.removeChild(li);
          inputElement.focus();
        });
  
        // Clear the input value
        inputElement.value = '';
      } else {
        // If input is blank, focus the input field
        inputElement.focus();
      }
    });
  });
  