$('#btnSubmit').click(function(e){
    var templateParams = {
        name: $('#first').val(),
        institute: $('#second').val(),
        email: $('#third').val(),
        infor: $('#forth').val()
    };
    emailjs.send('service_2c9wpet', 'FE108', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your Request has been Sent!");
    }, function(error) {
       console.log('FAILED...', error);
       alert("Your Request failed!")
    });
});
