function verificarHora(nombre, edad, genero, horaActual, idioma) {
    let hora = " ";
    if (idioma == "ES"){

            if(horaActual >= 1 && horaActual < 12)    {
                hora = "Buenas Dias";
            }
            else if (horaActual > 12 && horaActual < 18){
                hora = "Buenas Tardes ";
            }
            else{
                hora = "Buenas Noches ";
            }

            if (genero == "M") {
                if (edad > 30) {
                return hora + " Sr. " + nombre;
                } 
                else {
                return hora + nombre;
                }
            } 
            else if (genero == "F") {
                if (edad > 30) {
                return hora + " Sra. " + nombre;
                } 
                else {
                return hora + nombre;
                }
            }

    }else{
        if(horaActual >= 1 && horaActual < 12)    {
            hora = "Good Morning ";
        }
        else if (horaActual > 12 && horaActual < 20){
            hora = "Good Afternoon ";
        }
        else{
            hora = "Good Night ";
        }
    
        if (genero == "M") {
            if (edad > 30) {
              return hora + " Mr. " + nombre;
            } 
            else {
              return hora + " "+ nombre;
            }
          } 
          else if (genero == "F") {
            if (edad > 30) {
              return hora + " Miss " + nombre;
            } 
            else {
              return hora + " " + nombre;
            }
          }

    }

}
export default verificarHora;
  