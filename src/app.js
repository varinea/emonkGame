// LOGIN USUARIO
function go() {

    if (document.form.password.value == 'emonkrocks' && document.form.login.value == 'emonk') {
        document.form.submit();
    } else {
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
}

// INTERFAZ JUEGO
let getNum = function () {
    const user = document.getElementById("ingNum").value; //X es jugador 1

    //Calcula un número aleatorio entre 10, el ceil es para que lo redondee porque el math.random utiliza decimales
    const opponent = Math.ceil(Math.random() * 10)
    if(user === ""){
        alert("Agregue un número del 1 al 10");  
        return false; 
    }   
    else if(user.length>10) {
        alert("Agregue números del 1 al 10");  
        return false; 
    }
    else if(isNaN(user)) {
        alert("Agregue solo números");  
        return false; 
    } 
    

    // console.log("jugador 1: ", user)
    document.getElementById("resulOne").innerHTML += 
                                `<span class="border border-warning">Jugador:</span>${user}`;
                               
    // console.log("jugador 2: ", opponent)
    document.getElementById("resulTwo").innerHTML += 
                                `<span class="border border-danger">Contrincante:</span>${opponent}`;
                                
    if (opponent % 2 === 0) { //% 2 le dice que es par
        if (user > opponent) {
            document.getElementById("nuResult_User").innerHTML +=
                                `<div class="alert alert-warning" role="alert">
                                    “¡Ganaste esta ronda!”
                                </div> `;

        } else if (opponent > user) {
            document.getElementById("nuResult_virtual").innerHTML += 
                                `<div class="alert alert-dark" role="alert">
                                   “Más suerte para la próxima. Tu contrincante es el ganador”
                                </div>`;
        } else {
            document.getElementById("empate").innerHTML += 
                                `<div class="alert alert-info" role="alert">
                                  “Empate!”
                                 </div>`;
        }
    } else {
        if (user < opponent) {
            document.getElementById("nuResult_User").innerHTML += 
                                `<div class="alert alert-warning" role="alert">
                                  “¡Ganaste esta ronda!”
                                 </div>`;

        } else if (opponent < user) {
            document.getElementById("nuResult_virtual").innerHTML += 
                                `<div class="alert alert-dark" role="alert">
                                  “Más suerte para la próxima. Tu contrincante es el ganador”
                                </div>`;
        } else {
            document.getElementById("empate").innerHTML += 
                                `<div class="alert alert-info" role="alert">
                                  “Empate!”
                                </div>`;
        }
    }
}