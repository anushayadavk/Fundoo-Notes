window.addEventListener('DOMContentLoaded', function() {
    const urlSearchParams = new URLSearchParams(window.location.search);

    let regexemail = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    let regexpassword = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    
    const email = document.getElementById('email');
    const Password = document.getElementById('Password');

    const button = document.getElementById('button');
    const emailhelper = document.getElementById('mail');
    const passwordhelper = document.getElementById('pass');

    const next = document.querySelector('.n1')
    
    let a1;
    let b1;
    
    //    let field1 = false;
    //    let field2 = false;
    //    let field3 = false;
    //    let field4 = false;
    //    let field5 = false;
    
    email.addEventListener('change', function () {
    a1 = email.value;
    console.log(a1)        
     })
     Password.addEventListener('change', function () {
        b1 = Password.value;
        console.log(b1)        
     })


    button.addEventListener('click', function (e) {
        e.preventDefault();
        let isemailValid  = regexemail.test(a1)
        let ispasswordValid = regexpassword.test(b1)
        
        if(isemailValid == false || a1==undefined) {
            email.style.border = "1px solid red"
            emailhelper.style.display = "inline"
        }
        else if (isemailValid == true) {
            email.style.border = "1px solid green"
            emailhelper.style.display = "none"
        }
        if(ispasswordValid == false || b1==undefined) {
            Password.style.border = "1px solid red"
            passwordhelper.style.display = "inline"
        }
        else if (ispasswordValid == true) {
            Password.style.border = "1px solid green"
            passwordhelper.style.display = "none"
        }
        
        
        let obj1 =
        {
            email: a1,
            password : b1
        }
        console.log(obj1)
        requirejs(['../service/userservice.js'], (methods)=>{
           methods.signin(obj1).then(function (response){
             console.log(response)
             localStorage.setItem('token',response.data.id)
            })
        //     .catch(function(error){
        //         console.log(error)
        //   })
   
       });
    

    })

    next.addEventListener('click', function () {
        window.location = "http://localhost:5501/html/keep_notes.html";
  
      })

})