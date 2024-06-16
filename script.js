// calcula el número de segundos transcurridos desde el inicio del día
function getSecondsSinceStartOfDay() {
    var now = new Date(); 
    return now.getSeconds() + 
      now.getMinutes() * 60 + 
      now.getHours() * 3600; 
  }
  
  // posición de las manecillas del reloj
  function updateClock() {
    var time = getSecondsSinceStartOfDay(); // Obtiene los segundos transcurridos desde el inicio del día
    
    // Calcula las posiciones de las manecillas
    var hours = (time / 3600) % 12; // Obtiene las horas en formato de 12 horas
    var minutes = (time / 60) % 60; // Obtiene los minutos
    var seconds = time % 60; // Obtiene los segundos
    
    // Calcula los ángulos de rotación para cada manecilla
    var hourDeg = (hours / 12) * 360 + 90; // Ángulo de la hora
    var minuteDeg = (minutes / 60) * 360 + 90; // Ángulo de los minutos
    var secondDeg = (seconds / 60) * 360 + 90; // Ángulo de los segundos
    
    // Aplica la rotación a las manecillas del reloj
    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("seconds").style.transform = `rotate(${secondDeg}deg)`;
  }
  
  // Llama a la función updateClock cada 1000 milisegundos (1 segundo) para actualizar las manecillas
  setInterval(updateClock, 1000);
  updateClock(); // reinicia la posición del reloj al cargar la página