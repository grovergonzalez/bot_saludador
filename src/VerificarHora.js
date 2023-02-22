function verificarHora(nombre, edad, genero, horaActual) {
    let hora = " ";
    if(horaActual >= 1 && horaActual < 12)    {
        hora = "Buenas Dias";
    }
    else if (horaActual > 12 && horaActual < 18){
        hora = "Buenas Tardes ";
    }
    else{
        hora = "Buenas Noches ";
    }

    if (genero == "Masculino") {
        if (edad > 30) {
          return hora + " Sr. " + nombre;
        } 
        else {
          return hora + nombre;
        }
      } 
      else if (genero == "Femenino") {
        if (edad > 30) {
          return hora + " Sra. " + nombre;
        } 
        else {
          return hora + nombre;
        }
      }

}
export default verificarHora;
  