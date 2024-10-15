// https://dashboard.emailjs.com/admin
// dayo_john16@yahoo.com


emailjs.init('kPR5fCmH0j3E0NSyr')
  const resort_contact_button = document.getElementById('resort_contact_button');
  const resort_contact_button2 = document.querySelector('.resort_contact_button');
document.getElementById('resort_contact_form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   resort_contact_button.value = 'Sending...';
   const serviceID = 'service_wizvf4w';
   const templateID = 'template_hzlk188';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      resort_contact_button.value = 'Send Email';
      resort_contact_button.style.display = 'none';
      resort_contact_button2.style.display = 'none';

      alert('Sent!');
    }, (err) => {
      resort_contact_button.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});




// var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);