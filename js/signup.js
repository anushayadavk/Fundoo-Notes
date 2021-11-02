
window.addEventListener('DOMContentLoaded', function() {
    
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let regexfirstname = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexlastname = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexemail = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    let regexpassword = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    let regexconfirm = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');

    const first_name = document.getElementById('first_name');
    const last_name = document.getElementById('last_name');
    const email = document.getElementById('email');
    const Password = document.getElementById('Password');
    const Confirm = document.getElementById('Confirm');

    const button = document.getElementById('button');
    const helper = document.querySelector('.helper-text');
    const helperl = document.getElementById('helper1')
    const emailhelper = document.getElementById('mail');
    const passwordhelper = document.getElementById('pass');
    const confirmhelper = document.getElementById('conf1');
    const signin = document.querySelector('.qw');

    let a ;
    let b;
    let c;
    let d;
    let f;
    
    //    let field1 = false;
    //    let field2 = false;
    //    let field3 = false;
    //    let field4 = false;
    //    let field5 = false;
    
    first_name.addEventListener('change', function () {
         a = first_name.value;
        console.log(a)        
    })
    last_name.addEventListener('change', function () {
        b = last_name.value;
       console.log(b)        
    })
    email.addEventListener('change', function () {
    c = email.value;
    console.log(c)        
     })
     Password.addEventListener('change', function () {
        d = Password.value;
        console.log(d)        
     })
     Confirm.addEventListener('change', function () {
        f = Confirm.value;
        console.log(f)        
     })


    button.addEventListener('click', function (e) {
        e.preventDefault();
        let isfirstValid = regexfirstname.test(a)
        let islastnameValid = regexlastname.test(b)
        let isemailValid  = regexemail.test(c)
        let ispasswordValid = regexpassword.test(d)
        let isconfirmpasswordValid = regexconfirm.test(f)
       console.log(a);
        if(isfirstValid == false || a==undefined) {
            first_name.style.border = "1px solid red"
            helper.style.display = "inline"
        }
        else if (isfirstValid == true) {
            first_name.style.border = "1px solid green"
            helper.style.display = "none"
        }
        if(islastnameValid == false || b==undefined) {
            last_name.style.border = "1px solid red"
            helperl.style.display = "inline"
        }
        else if (islastnameValid == true) {
            last_name.style.border = "1px solid green"
            helperl.style.display = "none"
        }
        if(isemailValid == false || c==undefined) {
            email.style.border = "1px solid red"
            emailhelper.style.display = "inline"
        }
        else if (isemailValid == true) {
            email.style.border = "1px solid green"
            emailhelper.style.display = "none"
        }
        if(ispasswordValid == false || d==undefined) {
            Password.style.border = "1px solid red"
            passwordhelper.style.display = "inline"
        }
        else if (ispasswordValid == true) {
            Password.style.border = "1px solid green"
            passwordhelper.style.display = "none"
        }
        if(isconfirmpasswordValid == false || f==undefined) {
            Confirm.style.border = "1px solid red"
            confirmhelper.style.display = "inline"
        }
        else if (isconfirmpasswordValid == true) {
            Confirm.style.border = "1px solid green"
            confirmhelper.style.display = "none"
        }

        
        
        let obj =
        {
         firstName: a,
            lastName: b,
            service: "advance" ,
            email: c,
            password : d
        }
        console.log(obj)
        requirejs(['../service/userservice.js'], (methods)=>{
           methods.signup(obj).then(function (response){
             console.log(response)
            }).catch(function(error){
                console.log(error)
          })
   
       });

    

    })


    signin.addEventListener('click', function () {
        window.location = "http://localhost:5501/html/signin.html"

      })
    

})