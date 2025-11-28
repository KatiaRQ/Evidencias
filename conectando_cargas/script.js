// --- 1. Datos de los Problemas (Extraídos del PDF) ---
const PROBLEMAS_FISICA = [
    {
        "parcial": 1,
        "problema": "Dos cargas puntuales +4 µC y +2 µC están separadas 30 cm en el aire... ¿Cuál es el valor aproximado de la fuerza de repulsión entre las cargas?",
        "opciones": ["a) 0.8 N", "b) 4 N", "c) 2.4 N", "d) 9.6 N"],
        "respuesta_correcta": "a) 0.8 N"
    },
    {
        "parcial": 1,
        "problema": "Un cable coaxial tiene un conductor interno de radio a = 1 mm con λ = +5 nC/m y una cubierta externa... determine la magnitud del campo eléctrico en un punto situado a 3 mm del eje.",
        "opciones": ["a) 1.5 × 10⁴ N/C", "b) 3.0 × 10⁴ N/C", "c) 4.5 × 10⁴ N/C", "d) 6.0 × 10⁴ N/C"],
        "respuesta_correcta": "b) 3.0 × 10⁴ N/C"
    },
    {
        "parcial": 1,
        "problema": "Un electrón se proyecta horizontalmente con una velocidad v₀ = 2.0×10⁶ m/s ... calcule el desplazamiento vertical, en metros, del electrón en el instante en que abandona la región entre las placas.",
        "opciones": ["a) 4.4 × 10⁻⁴ m", "b) 1.76 × 10⁻³ m", "c) 2.20 × 10⁻³ m", "d) 4.40 × 10⁻³ m"],
        "respuesta_correcta": "a) 4.4 × 10⁻⁴ m"
    },
    {
        "parcial": 1,
        "problema": "Dos cargas puntuales, A y B, están separadas por una distancia fija. Si la magnitud de la carga A se duplica, ¿cómo cambia la fuerza eléctrica sobre la carga B y el campo eléctrico creado por A en la posición de B?",
        "opciones": ["a) Tanto la fuerza sobre B como el campo en B se duplican.", "b) La fuerza sobre B se duplica, pero el campo en B permanece igual.", "c) La fuerza sobre B se duplica, y el campo en B también se duplica.", "d) La fuerza sobre B se cuadruplica, y el campo en B se duplica."],
        "respuesta_correcta": "c) La fuerza sobre B se duplica, y el campo en B también se duplica."
    },
     {
        "parcial": 1,
        "problema": "Un protón y un electrón son liberados desde el reposo en la misma región de campo eléctrico uniforme dirigido hacia la derecha... ¿cuál de las siguientes afirmaciones es CORRECTA?",
        "opciones": ["a) Ambos se aceleran en la misma dirección y con la misma magnitud.", "b) Se aceleran en direcciones opuestas, pero con la misma magnitud de aceleración.", "c) Se aceleran en direcciones opuestas y el electrón tiene mayor aceleración.", "d) Se aceleran en direcciones opuestas y el protón tiene mayor aceleración."],
        "respuesta_correcta": "c) Se aceleran en direcciones opuestas y el electrón tiene mayor aceleración."
    },
    {
        "parcial": 2,
        "problema": "Una fuente de 24 V se conecta a una resistencia R₁=6 Ω en serie. Esta combinación en serie está en paralelo con una resistencia R₂=8 Ω... ¿Cuál es la potencia total disipada por el circuito?",
        "opciones": ["a) 48 W", "b) 72 W", "c) 96 W", "d) 120 W"],
        "respuesta_correcta": "b) 72 W"
    },
    {
        "parcial": 2,
        "problema": "Un alambre de cobre de 2 m de longitud y 1 mm² de área de sección transversal tiene una resistividad de 1.7 × 10⁻⁸ Ω·m. Se conecta a una batería de 9 V. ¿Cuál es la corriente que circula por el alambre?",
        "opciones": ["a) 265 A", "b) 112 A", "c) 38 A", "d) 529 A"],
        "respuesta_correcta": "d) 529 A"
    },
    {
        "parcial": 2,
        "problema": "Un alambre de resistencia R se estira hasta duplicar su longitud, manteniendo constante su volumen. ¿Cuál es la nueva resistencia del alambre?",
        "opciones": ["a) R", "b) 2R", "c) 4R", "d) 8R"],
        "respuesta_correcta": "c) 4R"
    },
    {
        "parcial": 2,
        "problema": "En un laboratorio, se tiene un circuito RC simple en serie. Se desea modificar el circuito para que el capacitor se cargue al doble de velocidad... ¿Cuál de las siguientes modificaciones, realizada de forma aislada, lograría este objetivo?",
        "opciones": ["a) Duplicar el valor de la resistencia R.", "b) Duplicar el valor de la capacitancia C.", "c) Reducir a la mitad el valor de la resistencia R.", "d) Reducir a la mitad el valor de la capacitancia C y duplicar la resistencia R."],
        "respuesta_correcta": "c) Reducir a la mitad el valor de la resistencia R."
    },
    {
        "parcial": 3,
        "problema": "En un laboratorio, un cable rectilíneo de 80 cm de longitud y 50 g de masa está suspendido horizontalmente... Calcula la magnitud y dirección de dicha corriente.",
        "opciones": ["a) 0.51 A, Este a Oeste", "b) 0.51 A, Oeste a Este", "c) 1.02 A, Este a Oeste", "d) 1.02 A, Oeste a Este"],
        "respuesta_correcta": "d) 1.02 A, Oeste a Este"
    },
    {
        "parcial": 3,
        "problema": "Una bobina circular plana con 100 espiras y una resistencia total de 5 Ω tiene un área de 0.04 m². Está orientada con su plano perpendicular a un campo magnético uniforme. Si la magnitud del campo disminuye uniformemente desde 0.8 T hasta 0.2 T en un intervalo de 0.5 segundos, calcula la corriente media inducida en la bobina durante este periodo.",
        "opciones": ["a) 0.48 A", "b) 0.96 A", "c) 1.92 A", "d) 0.24 A"],
        "respuesta_correcta": "b) 0.96 A"
    },
    {
        "parcial": 3,
        "problema": "Un imán en forma de barra se deja caer desde el reposo a través del centro de un anillo metálico circular... Para verificar la Ley de Lenz, se analiza la dirección de la corriente inducida...",
        "opciones": ["a) Al acercarse: antihoraria. Al alejarse: horaria.", "b) Al acercarse: horaria. Al alejarse: antihoraria.", "c) Al acercarse: horaria. Al alejarse: horaria.", "d) Al acercarse: antihoraria. Al alejarse: antihoraria."],
        "respuesta_correcta": "a) Al acercarse: antihoraria. Al alejarse: horaria."
    }
];

function assignProblemNumbers() {
    let parcialCounts = {};
    PROBLEMAS_FISICA.forEach(problem => {
        if (!parcialCounts[problem.parcial]) {
            parcialCounts[problem.parcial] = 0;
        }
        parcialCounts[problem.parcial]++;
        problem.numParcial = parcialCounts[problem.parcial];
    });
}
assignProblemNumbers();


// --- 2. Gestión del Estado de la Aplicación y Navegación ---
let currentQuestionIndex = 0;
const appArea = document.getElementById('content-area');
const navLeftBtn = document.getElementById('nav-button-left');
const navRightBtn = document.getElementById('nav-button-right');

let historyStack = [];
// El estado ahora incluye si la última respuesta fue correcta, que controla 'canAdvance'
let currentState = { type: 'image', id: 'inicio', canAdvance: true, canGoBack: false, lastAnswerCorrect: false };


function updateNavigationButtons() {
    navLeftBtn.style.display = currentState.canGoBack ? 'block' : 'none';
    
    // Solo mostramos el botón Siguiente si la pantalla actual lo permite O si la última respuesta fue correcta
    const canAdvanceManual = currentState.canAdvance || currentState.lastAnswerCorrect;
    navRightBtn.style.display = canAdvanceManual ? 'block' : 'none';
    
    // Desactivar visualmente si no se puede avanzar (aunque el display: none ya lo hace)
    // navRightBtn.disabled = !canAdvanceManual; 
}

function navigateTo(newState) {
    if (currentState.type !== 'question') { // No guardamos preguntas en el historial para simplificar retroceso
        historyStack.push(currentState);
    }
    currentState = newState;

    if (currentState.type === 'image') {
        renderImageScreen(currentState.id + '.png');
    } else if (currentState.type === 'question') {
        renderQuestionScreen();
    }
    
    updateNavigationButtons();
}

function goNext() {
    // Si estamos en una pantalla de imagen (inicio, laberinto, distancia, victoria)
    if (currentState.type === 'image') {
        if (currentState.id === 'inicio') {
            navigateTo({ type: 'image', id: 'laberinto', canAdvance: true, canGoBack: true, lastAnswerCorrect: false });
        } else if (currentState.id === 'laberinto') {
            currentQuestionIndex = 0;
            // Las preguntas no se avanzan con este botón, sino con los botones de opción
            navigateTo({ type: 'question', id: 'q' + currentQuestionIndex, canAdvance: false, canGoBack: true, lastAnswerCorrect: false });
            
        /* --- CAMBIO AQUÍ: Detectar el final del juego --- */
        } else if (currentState.id === 'distancia3') {
            // Si estamos en la distancia 3, el siguiente paso es la Victoria
            navigateTo({ type: 'image', id: 'victoria', canAdvance: false, canGoBack: true, lastAnswerCorrect: false });
            
        } else if (currentState.id.startsWith('distancia')) {
            // Lógica para avanzar al siguiente parcial (si no es el 3)
            advanceToNextParcial();
        }
    } else if (currentState.type === 'question') {
        // Esto no debería ser llamado si type='question' porque los botones globales están ocultos
    }
}

function advanceToNextParcial() {
    const currentParcial = PROBLEMAS_FISICA[currentQuestionIndex].parcial;
    const nextParcialStartGameIndex = PROBLEMAS_FISICA.findIndex(q => q.parcial === currentParcial + 1);

    if (nextParcialStartGameIndex !== -1) {
        currentQuestionIndex = nextParcialStartGameIndex;
        navigateTo({ type: 'question', id: 'q' + currentQuestionIndex, canAdvance: false, canGoBack: true, lastAnswerCorrect: false });
    } else {
        // Fin del juego (después de distancia3.png) - no hay a dónde avanzar
        // Ocultar botón de siguiente
        currentState.canAdvance = false;
        updateNavigationButtons();
    }
}

function goBack() {
    if (historyStack.length > 0) {
        const prevState = historyStack.pop();
        currentState = prevState;

        if (currentState.type === 'image') {
            renderImageScreen(currentState.id + '.png');
        } else if (currentState.type === 'question') {
            // Retroceder al inicio del parcial anterior
            const targetParcial = PROBLEMAS_FISICA[currentQuestionIndex].parcial;
            // Encuentra el índice de inicio del parcial anterior
            currentQuestionIndex = PROBLEMAS_FISICA.findIndex(q => q.parcial === targetParcial && q.numParcial === 1);
            renderQuestionScreen();
        }
        updateNavigationButtons();
    }
}


// --- 3. Funciones de Renderizado y Lógica de Problemas ---

function renderImageScreen(imageSrc) {
    appArea.innerHTML = `<img src="${imageSrc}" class="fullscreen-image" alt="Screen Image">`;
}

function renderQuestionScreen() {
    const questionData = PROBLEMAS_FISICA[currentQuestionIndex];
    
    /* --- CAMBIO AQUÍ: Eliminé style="background-image: url('problemas.png');" --- */
    appArea.innerHTML = `
        <div class="question-container">
            <div class="question-text">
                <h3>Parcial ${questionData.parcial} - Problema ${questionData.numParcial}</h3>
                <p>${questionData.problema}</p>
            </div>
            <div class="options-container">
            </div>
        </div>
    `;
    /* -------------------------------------------------------------------------- */
    
    navLeftBtn.style.display = 'none';
    navRightBtn.style.display = 'none'; 

    const optionsContainer = appArea.querySelector('.options-container');
    questionData.opciones.forEach(optionText => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = optionText;
        button.addEventListener('click', () => evaluateAnswer(optionText));
        optionsContainer.appendChild(button);
    });
}

function evaluateAnswer(selectedOption) {
    const correctAnswer = PROBLEMAS_FISICA[currentQuestionIndex].respuesta_correcta;
    
    // Actualizar el estado global con el resultado de la respuesta
    const isCorrect = (selectedOption === correctAnswer);
    const feedbackImage = isCorrect ? 'ganaste.png' : 'perdiste.png';

    // Navegar a la pantalla de feedback temporal
    renderImageScreen(feedbackImage); 
    
    // Ocultar nav global durante el feedback
    navLeftBtn.style.display = 'none';
    navRightBtn.style.display = 'none';


    setTimeout(() => {
        // Después del feedback, volvemos a la pantalla de pregunta pero actualizando el estado de avance
        
        // Si fue incorrecta, nos quedamos en la pregunta actual, pero permitimos 'avanzar' a la siguiente si es correcta
        // Si fue correcta, permitimos avanzar a la siguiente pregunta o pantalla de distancia
        
        currentState.lastAnswerCorrect = isCorrect; 
        
        // Si la respuesta fue incorrecta, volvemos a renderizar la pregunta actual con los botones de nav actualizados.
        if (!isCorrect) {
            navigateTo({ type: 'question', id: 'q' + currentQuestionIndex, canAdvance: false, canGoBack: true, lastAnswerCorrect: false });
        } else {
            // Si fue correcta, la función nextQuestionOrDistance decidirá si es la siguiente pregunta o una pantalla de distancia
            nextQuestionOrDistance();
        }

    }, 1000); // 1 segundo de feedback
}

// nextQuestionOrDistance ahora solo avanza si se llama desde el flujo interno (timeout)
// y se basa en lastAnswerCorrect para decidir si se muestra el botón Siguiente en la pantalla siguiente.
function nextQuestionOrDistance() {
    const currentParcial = PROBLEMAS_FISICA[currentQuestionIndex].parcial;
    const nextQuestion = PROBLEMAS_FISICA[currentQuestionIndex + 1];

    if (nextQuestion && nextQuestion.parcial === currentParcial) {
        currentQuestionIndex++;
        navigateTo({ type: 'question', id: 'q' + currentQuestionIndex, canAdvance: false, canGoBack: true, lastAnswerCorrect: false });
    } else {
        // Final del parcial, mostrar imagen de distancia. Permitimos avance manual desde aquí.
        let distanceImageId = '';
        if (currentParcial === 1) { distanceImageId = 'distancia1'; }
        else if (currentParcial === 2) { distanceImageId = 'distancia2'; }
        else if (currentParcial === 3) { distanceImageId = 'distancia3'; }
        
        navigateTo({ type: 'image', id: distanceImageId, canAdvance: true, canGoBack: true, lastAnswerCorrect: false }); 
    }
}

// --- 4. Flujo de Inicio ---

function startApp() {
    navigateTo({ type: 'image', id: 'inicio', canAdvance: true, canGoBack: false, lastAnswerCorrect: false });
}

// Iniciar la aplicación cuando el script se carga
startApp();
