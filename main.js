

$(document).ready(function () {
    //ALERT TO SHOW SUBSCRIBE DOESNT ACTUALLY WORK BUT CAN COMMENT OUT TO VALIDATE USER INPUTS VALID EMAIL ADDRESS
    $('#subButton').submit(function () {
        event.preventDefault();
        alert('This Function will be coming soon!');
    });
    //SHOW CONTENT MAIN PAGE FUNCTION
    $('.readmore').click(function() {
        event.preventDefault();
        $('#show-this-on-click').slideDown();
        $('.readmore').hide();
        });
        
        
  
});
