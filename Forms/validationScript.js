    // JavaScript code for form validation
    let form = document.getElementById("myForm");
	
    form.addEventListener('submit', function(event){
      // Retrieve the input field value
      let input = document.getElementById("inputField").value;
      // Regular expression pattern for alphanumeric input
      const regEx = /^[a-z0-9]+$/i;
      // Check if the input value matches the pattern
      if (regEx.test(input) == true) {
         // Valid input: display confirmation and submit the form
        alert("Congrats! Form was alphanumeric and submitted.")
      }
      else {
        // Prevent form from submitting
        event.preventDefault()
          // Invalid input: display error message
        alert("Invalid submission. Retry By entering alphanumeric characters only.")
        console.log(event.preventDefault());
      }
    }     
  )