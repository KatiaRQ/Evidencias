document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("comprobar").addEventListener("click", function() {
        let correctas = 0;
        const respuestas = {
            p1: "B",
            p2: "A",
            p3: "B",
            p4: "B",
            p5: "C" 
        };

        const puntos = [0, 0, 0, 0, 0]; // Array para almacenar los puntos por pregunta

        for (let pregunta in respuestas) {
            let opciones = document.getElementsByName(pregunta);
            for (let i = 0; i < opciones.length; i++) {
                if (opciones[i].checked && opciones[i].value === respuestas[pregunta]) {
                    correctas++;
                    puntos[parseInt(pregunta.substring(1)) - 1] = 1;
                    break;
                }
            }
        }

        let mensaje = "";
        if (correctas === 1) {
            mensaje = "Acertaste 1. ¿Has leído la saga Una Corte de Rosas y Espinas?";
        } else if (correctas === 2) {
            mensaje = "Acertaste 2. Aún es un puntaje bajo pero peor es nada";
        } else if (correctas === 3) {
            mensaje = "Acertaste 3. Podría decirse que eres medio fan de la saga";
        } else if (correctas === 4) {
            mensaje = "Acertaste 4. Estás muy cerca de ser un super fanático de la saga";
        } else if (correctas === 5) {
            mensaje = "¡Felicidades, eres un verdadero fan de la saga Una Corte de Rosas y Espinas!";
        } else {
            mensaje = "No acertaste ninguna :(";
        }

        document.getElementById("mensaje").innerHTML = `<p>${mensaje}</p>`;

        // Generar el gráfico
        generarGrafico(puntos);
    });

    document.getElementById("generarPdf").addEventListener("click", function() {
        generarPDF();
    });

    function generarPDF() {
        try {
            const doc = new jsPDF();

            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(106, 13, 176);
            doc.text("Respuestas Correctas", doc.internal.pageSize.width / 2, 15, { align: "center" });

            doc.setTextColor(169, 88, 228);
            doc.setFont("helvetica", "normal");

            const contenido = [
                { pregunta: "1. ¿Qué secreto escondía Rhysand sobre su vínculo con Feyre en 'Una Corte de Alas y Ruina'?", respuesta: "Que eran compañeros de alma (mates) desde el principio.", correcta: "B" },
                { pregunta: "2. ¿Cómo se llama la ciudad flotante gobernada por Rhysand?", respuesta: "Velaris.", correcta: "A" },
                { pregunta: "3. ¿Qué poder especial desarrolla Nesta Archeron en 'Una Corte de Plata y Llama'?", respuesta: "Poderes de la Madre (creación y destrucción).", correcta: "B" },
                { pregunta: "4. ¿Quién es el villano principal en 'Una Corte de Niebla y Furia'?", respuesta: "El Rey de Hybern.", correcta: "B" },
                { pregunta: "5. ¿Qué sacrificio hace Feyre para salvar a Rhysand en 'Una Corte de Alas y Ruina'?", respuesta: "Hacer un trato con la muerte para compartir su vida con él.", correcta: "C" }
            ];

            let posY = 30;
            contenido.forEach((item) => {
                doc.setFont("helvetica", "bold");
                doc.setTextColor(106, 13, 176);
                doc.text(item.pregunta, 14, posY);
                posY += 8;

                doc.setFont("helvetica", "normal");
                doc.setTextColor(169, 88, 228);
                doc.text(`Respuesta correcta: ${item.respuesta}`, 20, posY);
                posY += 10;
            });

            const pdfData = doc.output("datauristring");
            const iframe = document.getElementById("pdfIframe");
            iframe.style.display = "block";
            iframe.src = pdfData;
        } catch (error) {
            console.error("Error al generar PDF:", error);
            alert("Error al generar PDF. Ver consola para detalles.");
        }
    }

    function generarGrafico(puntos) {
        const ctx = document.getElementById('grafico').getContext('2d');
        
        // Destruir gráfico anterior si existe
        if (window.myChart) {
            window.myChart.destroy();
        }
        
        window.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
                datasets: [{
                    label: 'Puntos obtenidos',
                    data: puntos,
                    backgroundColor: '#a958e4',
                    borderColor: '#6a0dad',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }
});