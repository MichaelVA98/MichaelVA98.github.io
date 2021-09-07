let ExtraerDatos = document.getElementById("boton-extraer");
ExtraerDatos.onclick = obtenerDatos;

function obtenerDatos(){

    //Declaración de las variables
    let nombres = document.getElementById("idNombres");
    let fecha= document.getElementById("fechaNacimiento");

    //Evaluamios las variables de entrada
    if (nombres.value == "") {
        document.getElementById("idNombres").focus();
    } else {
        document.getElementById("fechaNacimiento").focus();
    }
    if (nombres.value !== "" && fecha.value !== "") {

        //Obtenemos apellido paterno
        let posicion = nombres.value.split(' ');
        document.getElementById("idPaterno").value = posicion[0];

        //Obtenemos apellido paterno
        document.getElementById("idMaterno").value = posicion[1];

        //Obtenemos nombres
        document.getElementById("idNombre").value = posicion[2] + " " + posicion[3];

        //Obtenemos longitud del apellido
        let longitud = posicion[0] + posicion [1];
        document.getElementById("LongApellido").value = longitud.length + " letras";

        //Obtenemos la edad
        //let edadActual = obtenerEdad();
        document.getElementById("idedad").value = obtenerEdad()+ " años";

        //Obtenemos el mes en letras
        let mesLetras = document.getElementById("fechaNacimiento").value.split('-');
        switch (mesLetras[1]) {
            case '01':
                document.getElementById("idMes").value = "Enero";
                break;
            case '02':
                document.getElementById("idMes").value = "Febrero";
                break;
            case '03':
                document.getElementById("idMes").value = "Marzo";
                break;
            case '04':
                document.getElementById("idMes").value = "Abril";
                break;
            case '05':
                document.getElementById("idMes").value = "Mayo";
                break;
            case '06':
                document.getElementById("idMes").value = "Junio";
                break;
            case '07':
                document.getElementById("idMes").value = "Julio";
                break;
            case '08':
                document.getElementById("idMes").value = "Agosto";
                break;
            case '09':
                document.getElementById("idMes").value = "Setiembre";
                break;
            case '10':
                document.getElementById("idMes").value = "Octubre";
                break;
            case '11':
                document.getElementById("idMes").value = "Noviembre";
                break;
            case '12':
                document.getElementById("idMes").value = "Diciembre";
                break;
        }
    }

    //Creamos una función para obtener la edad
    function obtenerEdad (){
        let fecha = document.getElementById("fechaNacimiento").value.split('-');
        let anioNacimiento = fecha[0];
        let mesNacimiento = fecha[1];
        let diaNacimiento = fecha[2];
        let fechaActual= new Date();
        let anioActual = fechaActual.getFullYear();
        let mesActual = fechaActual.getMonth();
        let diaActual = fechaActual.getDate();
        edad = anioActual - fecha[0];

        if(mesActual < mesNacimiento - 1){
            edad = edad - 1;
         }
        if (mesNacimiento -1 == mesActual && diaActual < diaNacimiento){
            edad = edad - 1;
        }
        return edad; 
     }    
}

//Creamos una función para modificar el color
let cambiar = 1;

function modificarColor() {

    if (cambiar) {
        document.getElementById("label1").style.backgroundColor = "rgb(202, 37, 8)";
        document.getElementById("label2").style.backgroundColor = "rgb(202, 37, 8)";
        document.getElementById("label3").style.backgroundColor = "rgb(202, 37, 8)";
        document.getElementById("label4").style.backgroundColor = "rgb(202, 37, 8)";
        document.getElementById("label5").style.backgroundColor = "rgb(202, 37, 8)";
        document.getElementById("boton-colorear").style.backgroundColor = "rgb(12, 93, 191)";
        document.getElementById("label6").style.backgroundColor = "rgb(12, 93, 191)";
        document.getElementById("label7").style.backgroundColor = "rgb(12, 93, 191)";
        document.getElementById("label8").style.backgroundColor = "rgb(12, 93, 191)";
        cambiar = 0;
    } else {
        document.getElementById("label1").style.backgroundColor = "rgb(12, 93, 191)";
        document.getElementById("label2").style.backgroundColor = "rgb(12, 93, 191)";
        document.getElementById("label3").style.backgroundColor = "rgb(12, 93, 191)";
        document.getElementById("label4").style.backgroundColor = "rgb(12, 93, 191)";
        document.getElementById("label5").style.backgroundColor = "rgb(12, 93, 191)";
        document.getElementById("boton-colorear").style.backgroundColor =  "rgb(202, 37, 8)";
        document.getElementById("label6").style.backgroundColor = "rgb(202, 37, 8)";
        document.getElementById("label7").style.backgroundColor = "rgb(202, 37, 8)";
        document.getElementById("label8").style.backgroundColor = "rgb(202, 37, 8)";
        cambiar = 1;
    }

}


  
     

        