$(document).ready(function() {
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var formData = {
            email : $("#email").val(),
            password : $("#password").val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(customer) {
                if (customer.valid == true){
                    $("#loginform").removeClass("fail");
                    $("#loginform").addClass("success");
                } else {
                    $("#loginform").removeClass("success");
                    $("#loginform").addClass("fail");
                }
                $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " + customer.email+ "</br>" + "Password: " + customer.password+ "<br>" + "Valid User: " + customer.valid + "</p>");
            },
            error : function(e) {
                alert("Error!")
                console.log("Error: " + e);
            }
        });
        resetData();
    }

    function resetData(){
        $("#email").val("");
        $("#password").val("");
    }
});