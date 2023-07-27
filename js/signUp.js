// valdation:
// name: Start with capital EX:Mohmed
// email:EX: andrew@gmail.com
// pass:EX: 1)number 3 number at least
//        2) one special char
//        3)capital later 3 at least
//         4)small later  3 at least
//       ex: 123@ANDand




var userNameInput = document.getElementById('userName');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');

var loginEmailInput=document.getElementById('loginEmail');
var loginPasswordInput =document.getElementById('loginPassword');
var loginEmail;
var loginPassword;



var oldEmail;
var oldPass;



var userContainer =[];

function cheakUserInfo(){
    if(localStorage.getItem('userDataInfo')!=null){
        userContainer=JSON.parse(localStorage.getItem("userDataInfo"));
        // display(userContainer)
    }
    
}
cheakUserInfo();



var regexlogIn=/^\w{2,}/;
var regexName=/^[A-Z]\w{2,20}$/;
var regexEmail=/^[a-z]\w{3,15}@\w{3,10}(\.[a-z]{2,7}){1,3}$/;
var regexPassword=/^[0-9]{3,5}\W[A-Z]{2,5}[a-z]{2,6}$/;

function addUser(){

    if(validation(regexName,userNameInput.value)==true && validation(regexEmail,userEmailInput.value)==true && validation(regexPassword,userPasswordInput.value)==true){
        var user ={
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }

        oldEmail=userEmailInput.value;
        oldPass=userPasswordInput.value;
        
        if(searchOldUser(oldEmail,oldPass)){
            document.querySelector('#waringExists').classList.replace('d-none', 'd-block');
        }
        else{
            userContainer.push(user);
            localStorage.setItem("userDataInfo",JSON.stringify(userContainer));
            document.querySelector('#success').classList.replace('d-none', 'd-block');
            console.log(userContainer);
        }

    }
    else{
        document.querySelector('#requiredInput').classList.replace('d-none', 'd-block');
    }
    clearForm()
}

function searchOldUser(email , password ){

    for(var i=0;i<userContainer.length;i++){
        if(userContainer[i].email.includes(email)==true && userContainer[i].password.includes(password)==true){
            return true;
        }
    }
    return false;
}

console.log(userContainer);



function logIn(){
    if(validation(regexlogIn,loginEmailInput.value)==true && validation(regexlogIn,loginPasswordInput.value)==true){
        loginEmail=loginEmailInput.value;
        loginPassword=loginPasswordInput.value;
        console.log(loginEmail+"  "+loginPassword);
        
        searchUser(loginEmail,loginPassword)
        clearForm()

    }

    


}



var name;
function searchUser(email, password) {
    for (var i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email.includes(email) && userContainer[i].password.includes(password)) {
            window.location.href = 'home.html';

            name=userContainer[i].name
            console.log(userContainer[i].name)
            
        }
    }
    
}

function display(){
    var cartona=`
        <div class="sign-up text-center w-50  mx-auto py-5 px-5 ">
        <H1 class="mb-4 title">${'Welcome'+' '+ name}</H1>
    
        </div>`;
    
    document.getElementById('my-home').innerHTML=cartona;
}
display();







function clearForm(){
    userNameInput.value="";
    userEmailInput.value="";
    userPasswordInput.value="";
}

function logOut(){
    window.location.href = 'index.html';
}




function validation(regex,input){
    return regex.test(input)
}














