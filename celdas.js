function cargaDatosUser(){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            pintaTablaUser(this.responseText);
        }else{
            console.log(this.readyState + " " + this.status);
        }
    };

    xhttp.open("GET", "http://localhost/json/AccesoDatosJSON/leeDioses.php", true);
    xhttp.send();
}
function pintaTablaUser(respuesta){

    var respuestaJSON = JSON.parse(respuesta);

    if(respuestaJSON["estado"] === "ok"){
        console.log("VAMOS BIEN");
        var arrUser =  respuestaJSON["users"];

        for(var i = 0; i < arrUser.length; i++){

            var capaMito = document.getElementById("mitologia_" + arrUser[i].idUser)
            console.log("buscando en la capa de la mitologia " + arrUser[i].idUser)

                var fila = document.createElement("div");
                fila.setAttribute("id","user_"+ arrUser[i].id );
                fila.setAttribute("class","user card");
                fila.setAttribute("onclick","prueba(this)");

                    var nombreUser = document.createElement("h2");
                    var texto1 = document.createTextNode(arrUser[i].nombre);
                    nombreUser.appendChild(texto1);
                    nombreUser.setAttribute("id","nombreuser_"+ arrUser[i].id );

                    var fechaUser = document.createElement("date");
                    var texto2 = document.createTextNode(arrUser[i].descripcion);
                    descrDios.appendChild(texto2);
                    descrDios.setAttribute("id","fechauser_"+ arrUser[i].id );

                    var generoUser = document.createElement("p");
                    var texto3 = document.createTextNode(arrUser[i].idUser);
                    mitoDios.appendChild(texto3);
                    mitoDios.setAttribute("id","generouser_"+ arrUser[i].id );
                    mitoDios.setAttribute("Class","oculta" );

                fila.appendChild(nombreUser);
                fila.appendChild(fechaUser);
                fila.appendChild(generoUser);

            capaMito.appendChild(fila);
        }

    }else{
        console.log("VAMOS MAL");
    }
}
