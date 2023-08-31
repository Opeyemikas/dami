function validate()
{
   var username = document.getElementById("uname");
   let myPassword = document.getElementById('myPassword');

   if(username.value =="".trim() ||myPassword.value=="".trim() || email.value=="".trim() )
   {
       alert("No blank space allowed!");
       return false;
   }
   else 
   {
       true;
   }
}

let togglePassword = document.getElementById('togglePassword');
let myPassword = document.getElementById('myPassword');

togglePassword.addEventListener('click', function() {
    let type = myPassword.type;
    if (type == 'password') {
        myPassword.type = 'text';
    } else {
        myPassword.type = 'password';
    }
})