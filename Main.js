let hourRegex24 = RegExp(/^((0|1)(\d)?|2(0|1|2|3)|\d):(0|1|2|3|4|5)\d+$/);
let benefits = "¡Felicidades! Tus horas de sueño son óptimas. Los beneficios de dormir entre 7 y 9 horas al día incluyen: Conservación de energía\nTermorregulación y detoxificación cerebral\nRestauración tisular\nMemoria y aprendizaje\nEquilibrio hormonal\nRefuerzo de sistema inmunitario\nControl de hambre\nSalud cardiovascular";
let difficulties = "Tus horas de sueño son insuficientes. La privación del sueño genera sensación de hambre intensa, deseo aumentado por ingerir alimentos ricos en carbohidratos simples (dulces, pastel, galletas, pan). Este consumo de alimentos puede sobrepasar el gasto de energía por el cansancio de la noche anterior.\nLa falta de sueño provoca la reducción del volumen de células encargadas de eliminar los tejidos dañados y el incremento de los marcadores inflamatorios.\nLos efectos de la privación del sueño en el deportista no van a afectar solamente su salud sino también al rendimiento físico y cognitivo.  Por ejemplo, la fatiga en tareas cognitivas en los deportistas es más significativa tras haber sufrido un periodo de privación del sueño, incluso mayor que la generada en las tareas físicas, afectando de tal manera al estado de ánimo que puede llegar a limitar su rendimiento ante un esfuerzo máximo en el que la motivación intrínseca del sujeto que lo realiza es determinante en el resultado.";
let oversleep = "Tus horas de sueño son excesivas y un tanto inconvenientes para el rendimiento que se espera de un deportista.";

function evaluateHours(){
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;

    if(hourRegex24.test(start) && hourRegex24.test(end)){
        let startHours = parseInt(start.split(":")[0], 10);
        let startMinutes = parseInt(start.split(":")[1], 10);
        let endHours = parseInt(end.split(":")[0], 10);
        let endMinutes = parseInt(end.split(":")[1], 10);

        let totalHours = endHours -startHours;
        let overMinutes = endMinutes - startMinutes;
        let totalMinutes;
        let totalCycles;

        if(totalHours < 0 || (totalHours == 0 && overMinutes <= 0)){
            totalHours += 24;
        }
        
        if(overMinutes < 0){
            overMinutes += 60;
            totalHours--;
        }

        //se restan 120 minutos que no implican descanso
        if(totalHours >= 2){
            totalHours -= 2;
        }else {
            totalHours = 0;
            overMinutes = 0;
        }
        totalMinutes = (totalHours * 60) + overMinutes;
        totalCycles = Math.floor(totalMinutes / 90);

        let message = "Has descansado " + totalHours + " horas equivalentes a " + totalMinutes + " minutos que corresponden a " + totalCycles + " ciclos de sueño.\n";

        if(totalHours < 7){
            document.getElementById("warning").style.display = "block"
        }

        document.getElementById('output').innerHTML = message;

    }else{
        document.getElementById('output').innerHTML = "Inserte formato de hora tipo 24 horas de forma correcta, ejemplos: 19:32, 08:13, 9:50, 00:00";
    }
}