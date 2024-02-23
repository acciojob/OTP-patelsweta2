const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('input', (event) => {
        const value = event.target.value;
        
        if (value.length === 1) {
          // Move to the next input when a number is typed
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });

      input.addEventListener('keydown', (event) => {
        const value = event.target.value;
        
        if (event.key === 'Backspace' && value.length === 0) {
          // Move to the previous input on backspace
          if (index > 0) {
            inputs[index - 1].focus();
          }
        }
      });
    });