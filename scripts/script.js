function llenarVariables() {
    submit = document.getElementById("btnEnviar");
    modal = document.getElementById("sctModal");
    modalClose = document.getElementById("btnModalC");
    modalpName = document.getElementById("pName");

    nombre = document.getElementById("txtNombre");
    apellido = document.getElementById("txtApellido");
    contra = document.getElementById("txtPassword")
    email = document.getElementById("txtEmail");
    emailValida = document.getElementById("txtEmailValidation");
    contraValida = document.getElementById("txtPasswordValidation");

    errorS = document.getElementById("lblErrorS");
    errorT = document.getElementById("lblErrorT");
    errorP = document.getElementById("lblErrorP");
    textList = document.querySelectorAll("input[type=text]");
}

window.onload = () => {
    llenarVariables(); 
    submit.onclick = function (e) { 
        e.preventDefault();
        if (validarCampos() == true) { 
            modalpName.innerText = nombre.value.concat(" ", apellido.value); 
            modal.classList.add("modal-show"); 
            modalClose.onclick = function(){ 
                limpiarFormulario();
                modal.classList.remove("modal-show"); //lo cierra
            }
            window.onclick = function(e) { 
                if (e.target == modal) {
                    modal.classList.remove("modal-show"); //lo cierra
                }
            }
        } 
    }
    ocultarLabels();
}

function validarCampos() {
    validate = true;
    if (nombre.value.length < 2) { 
        nombre.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (apellido.value.length < 2) { 
        apellido.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) { 
        email.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (contra.value.length < 6) { 
        contra.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (emailValida.value != email.value) { 
        emailValida.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (contraValida.value != contra.value) {
        contraValida.labels[1].classList.toggle("hidden",false);
        validate = false;
    }

    return validate;
}

function ocultarLabels(){
    for (let i=0; i<textList.length; i++){ 
        textList[i].onfocus = function(){
            textList[i].labels[1].classList.toggle("hidden",true)
        }
    }
}

function limpiarFormulario() {
    document.getElementById("miForm").reset();
}
