document.querySelector("#form").addEventListener("submit", validarFormulario);

const nombre = document.querySelector("#name");
const apellido = document.querySelector("#lname");
const contraseña = document.querySelector("#password");
const correo = document.querySelector("#email");

function validarFormulario (e) {

    e.preventDefault();
    
    const Fullname = nombre.value.trim();
    const lastName = apellido.value.trim();
    const password = contraseña.value.trim();

    const email = correo.value.trim();
    const emailRegex = /^\S+@\S+\.\S+$/;
    

    if(Fullname === "") {
        emptyName();
    };
    
    if(lastName === "") {
        emptyLname();
    };

    if(password === "") {
        emptyPassword();
    };

    if(email === ""){
        emptyEmail();
        return;
    } else if (!emailRegex.test(email)){
        invalidEmail();
        return;
    }

    this.submit();
}

emptyName = () =>{
    document.querySelector("#nombre").innerHTML = "First Name cannot be empty";
    document.querySelector("#nombre").setAttribute("class", "error");
    document.querySelector("#name").placeholder = "";
    document.querySelector(".section-form__input--name").classList.add("error2");
    document.querySelector(".section-form__icon--name").classList.add("error3");
    setTimeout(() => {
        document.querySelector("#nombre").innerHTML = "";
        document.querySelector(".section-form__input--name").classList.remove("error2");
        document.querySelector(".section-form__icon--name").classList.remove("error3");
        document.querySelector("#name").placeholder = "First Name";
    }, 3500);
};


emptyLname = () => {
    document.querySelector("#apellido").innerHTML = "Last Name cannot be empty";
    document.querySelector("#apellido").setAttribute("class", "error");
    document.querySelector("#lname").placeholder = "";
    document.querySelector(".section-form__input--lname").classList.add("error2");
    document.querySelector(".section-form__icon--lname").classList.add("error3");
    setTimeout(() => {
        document.querySelector("#apellido").innerHTML = "";
        document.querySelector(".section-form__input--lname").classList.remove("error2");
        document.querySelector(".section-form__icon--lname").classList.remove("error3");
        document.querySelector("#lname").placeholder = "Last Name";
    }, 3500);
};

emptyEmail = () => {
    document.querySelector("#correo").innerHTML = "Email cannot be empty";
    document.querySelector("#correo").setAttribute("class", "error");
    document.querySelector(".section-form__input--email").classList.add("error2");
    document.querySelector(".section-form__icon--email").classList.add("error3");
    document.querySelector("#email").placeholder = "email@example/com";
    document.querySelector("#email").classList.add("error4");
    setTimeout(() => {
        document.querySelector("#correo").innerHTML = "";
        document.querySelector(".section-form__input--email").classList.remove("error2");
        document.querySelector(".section-form__icon--email").classList.remove("error3");
        document.querySelector("#email").placeholder = "Email Address";
        document.querySelector("#email").classList.remove("error4");
    }, 3500);
};

invalidEmail = () => {
    document.querySelector("#correo").innerHTML = "Looks like this is not an email";
    document.querySelector("#correo").setAttribute("class", "error");
    document.querySelector(".section-form__input--email").classList.add("error2");
    document.querySelector(".section-form__icon--email").classList.add("error3");
    setTimeout(() => {
        document.querySelector("#correo").innerHTML = "";
        document.querySelector(".section-form__input--email").classList.remove("error2");
        document.querySelector(".section-form__icon--email").classList.remove("error3");
    }, 3500);
};

emptyPassword = () => {
    document.querySelector("#contraseña").innerHTML = "Password cannot be empty";
    document.querySelector("#contraseña").setAttribute("class", "error");
    document.querySelector("#password").placeholder = "";
    document.querySelector(".section-form__input--password").classList.add("error2");
    document.querySelector(".section-form__icon--password").classList.add("error3");
    setTimeout(() => {
        document.querySelector("#contraseña").innerHTML = "";
        document.querySelector(".section-form__input--password").classList.remove("error2");
        document.querySelector(".section-form__icon--password").classList.remove("error3");
        document.querySelector("#password").placeholder = "Password";
    }, 3500);
};