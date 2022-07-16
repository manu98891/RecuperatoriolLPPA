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
    llenarVariables(); //cuando inicia la web, carga los elementos del HTML en las variables
    submit.onclick = function (e) { //cuando se presiona el boton enviar, realiza lo siguiente:
        e.preventDefault();
        if (validarCampos() == true) { //ejecuta la funcion validarCampos, en caso de estar correctos, ejecuta el if
            modalpName.innerText = nombre.value.concat(" ", apellido.value); //envia nombre y apellido registrados al modal
            modal.classList.add("modal-show"); //muestra el modal
            modalClose.onclick = function(){ //cuando se presiona el boton cerrar del modal
                limpiarFormulario();
                modal.classList.remove("modal-show"); //lo cierra
            }
            window.onclick = function(e) { //cuando se presiona cualquier parte fuera del modal
                if (e.target == modal) {
                    modal.classList.remove("modal-show"); //lo cierra
                }
            }
        } 
    }
    ocultarLabels();//ejecuta la funcion que se encarga de ocultar los labels de error
}

function validarCampos() {
    validate = true;
    if (nombre.value.length < 2) { //se valida que el nombre tenga al menos 3 caracteres
        nombre.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (apellido.value.length < 2) { //se valida que el apellido tenga al menos 3 caracteres
        apellido.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (!email.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) { //se valida que el email tenga formato valido
        email.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (contra.value.length < 6) { // validad que la contra tenga mas de 6 caracteres
        contra.labels[1].classList.toggle("hidden",false);
        validate = false;
    }
    if (emailValida.value != email.value) { // validar que el mail sea el mismo
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
    for (let i=0; i<textList.length; i++){ //oculta label de cada uno de los input text cuando entra en foco
        textList[i].onfocus = function(){
            textList[i].labels[1].classList.toggle("hidden",true)
        }
    }
}

function limpiarFormulario() {
    document.getElementById("miForm").reset();
}
