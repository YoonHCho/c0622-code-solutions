var $contact = document.querySelector('#contact-form');

$contact.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  var object = {};
  object.name = $contact.elements.name.value;
  object.email = $contact.elements.email.value;
  object.meesage = $contact.elements.message.value;
  console.log('messageData: ', object);
  $contact.reset();
}
