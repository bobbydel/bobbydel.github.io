//if comment out the alert function then the email validation will take 
//place to ensure that it is infact an email address that is submitted.

$(document).ready(function () {
    $('#subButton').submit(function () {
        console.log('working');
        event.preventDefault();
        alert('This Function will be coming soon!');
    });
    $('.readmore').click(function() {
        event.preventDefault();
        $('#show-this-on-click').slideDown();
        $('.readmore').hide();
        console.log('test');
        });
        
        
  
});
