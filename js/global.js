let firstName;
let lastName;
let salutation= 'MR.';
let protocol;
let output=document.querySelector('#output');
let form=document.querySelector('form');
form.addEventListener('submit', function(event){
  
  event.preventDefault();
  firstName=form.firstname.value;
  lastName=form.lastname.value;
  protocol=form.salutation.value;
  // Check for undefined variables -> set defaults
  if (typeof firstName === 'undefined') {
    // the variable is defined
    firstName = 'John'
  }
  if (typeof lastName === 'undefined') {
    // the variable is defined
    lastName = 'Doe'
  }

  // If no salutation -> death!
  if (typeof salutation === 'undefined') {
    // the variable is defined
    protocol = 'battle';
  } 

  // Greet our guest
  if(protocol === 'formal') {

    // Formal greeting
    output.innerHTML=`Hello, ${salutation} ${lastName}.`;

  } else if (protocol === 'informal') {
    // Informal greeting
    output.innerHTML=`Hi, ${firstName}.`;

  } else if (protocol === 'battle') {

    // Battle cry
    output.innerHTML=`${lastName}! You didn't fill out the form correctly! Prepare to die!`;

  } else {
    
    // Throw error
    output.innerHTML=`Unrecognized protocol.`;

  }

});
  
