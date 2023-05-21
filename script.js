function sendEmail() {
    var recipient = 'bestbyu@sales.com';  
    var bodyVal = document.getElementById('subject');
    var body = bodyVal.value; 
    var subject = 'Regarding customer support.';  
  
    var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(recipient) +
      '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
    window.open(gmailUrl);
    document.getElementById("successContainer").style.display = "block";

  }

  function closeSuccessMessage() {
  

    document.getElementById("successContainer").style.display = "none";
}