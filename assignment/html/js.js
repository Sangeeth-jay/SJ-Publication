
    function validation() {

        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        var age=document.getElementById("age");
        var bdate=document.getElementById("bdate");
        var cont=document.getElementById("contact");
        var email=document.getElementById("email");
        var pass=document.getElementById("pass");

        if (fname.value == "" || lname.value == "" || age.value=="" || bdate.value=="" || cont.value=="" ||email.value=="" || pass.value=="") {
            alert("User inputs can't be empty")
            break;
        }
        if(age.value > 100){
            alert("Age shuould be under 100 years")
            break;
        }
        else(cont.value.length > 10)
            alert("Enter Valid phone number")
        
    }
