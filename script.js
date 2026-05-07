document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Яка з цих планет — Марс?",
            answers: [
                "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg", 
                "https://upload.wikimedia.org/wikipedia/commons/d/d4/Saturn_in_natural_colors_%28captured_by_the_Hubble_Space_Telescope%29.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/250px-Mercury_in_color_-_Prockter07-edit1.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Як називається найвищий вулкан на Марсі?",
            answers: ["Гора Еверест", "Олімп", "Мауна-Кеа", "Везувій"],
            correct: 1,
            isImageQuiz: false
        },
        {
            question: "Виберіть фото марсохода Perseverance (Наполегливість):",
            answers: [
                "https://upload.wikimedia.org/wikipedia/commons/9/92/Perseverance_Landing_Skycrane.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sojourner_on_Mars_PIA01122.jpg/330px-Sojourner_on_Mars_PIA01122.jpg",
                "https://cdn.britannica.com/17/132317-050-8328935B/Artist-conception-Mars-Science-Laboratory.jpg"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Якого кольору небо на Марсі під час заходу сонця?",
            answers: ["Червоного", "Зеленого", "Блакитного", "Чорного"],
            correct: 2,
            isImageQuiz: false
        },
        {
            question: "Який із цих супутників належить Марсу (Фобос)?",
            answers: [
                "https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuodcpKnQO0CuXECCOoAvgcJPNWvD65ON1Iw&s",
                "https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Скільки триває один рік на Марсі?",
            answers: ["365 днів", "687 днів", "100 днів", "12 років"],
            correct: 1,
            isImageQuiz: false
        },
        {
            question: "Який основний газ в атмосфері Марса?",
            answers: ["Кисень", "Азот", "Вуглекислий газ", "Гелій"],
            correct: 2,
            isImageQuiz: false
        },
        {
            question: "Знайдіть зображення 'Обличчя на Марсі' (оптична ілюзія):",
            answers: [
                "https://focus.ua/static/storage/thumbs/920x465/7/51/etn2f7-637cdf8ef63d3e356f17a04ba2103517.jpg?v=4338_1",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Face_on_Mars_with_Inset.jpg/250px-Face_on_Mars_with_Inset.jpg", 
                "https://universemagazine.com/wp-content/uploads/2025/05/ca_0727nid_mars_south_polar_ice_cap_online.jpg",
                "https://cikavosti.com/wp-content/uploads/2017/01/188e81bb63df46bff26e617d98e60819.jpg"
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Яка гравітація на Марсі порівняно з Землею?",
            answers: ["Така ж сама", "Вдвічі більша", "Приблизно 38% від земної", "Гравітації немає"],
            correct: 2,
            isImageQuiz: false
        },
        {
            question: "Як називається найбільша система каньйонів на Марсі?",
            answers: ["Долина Маринера", "Гранд-Каньйон", "Рівнина Еллада", "Північне море"],
            correct: 0,
            isImageQuiz: false
        },
        {
            question: "Виберіть логотип компанії SpaceX:",
            answers: [
                "https://www.freelogovectors.net/wp-content/uploads/2023/08/spacex-logo-03-freelogovectors.net_.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/NASA_seal.svg/330px-NASA_seal.svg.png",
                "https://www.shutterstock.com/image-vector/rocket-launch-tech-logo-orbit-260nw-2734024849.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/6/6e/ESA_logo_simple.svg"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "У якому вигляді на Марсі зараз існує вода?",
            answers: ["Рідкі океани", "Лід та пара", "Кислотні дощі", "Води на Марсі немає"],
            correct: 1,
            isImageQuiz: false
        },
        {
            question: "Знайдіть фото марсіанського гелікоптера Ingenuity:",
            answers: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7vqUfTNdXZMadtwEqDGvXvQrztiDVvtwaA&s",
                "https://focus.ua/static/storage/thumbs/740x/6/e3/pd5gv7-020cf248c9f4aecd0c033333d5466e36.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRta5Y2OAQV5oyV5IML9l5BjIIGePDteP89zQ&s",
                "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/224/galileo_480x320_kids_activities.jpg?w=480&h=320&fit=clip&crop=faces%2Cfocalpoint"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Чому Марс червоний?",
            answers: ["Через сонячні опіки", "Через червоні водорості", "Через оксид заліза (іржу) в ґрунті", "Через колір атмосфери"],
            correct: 2,
            isImageQuiz: false
        },
        {
            question: "Як називаються два супутники Марса?",
            answers: ["Місяць і Сонце", "Деймос і Фобос", "Титан і Європа", "Іо та Каллісто"],
            correct: 1,
            isImageQuiz: false
        }
    ];

    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('.result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    const timerDisplay = document.querySelector('#timer');
    const scoreDisplay = document.querySelector('#score-display');
    const finalScoreDisplay = document.querySelector('#final-score');

    // Елемент для рекорду
    const bestScoreDisplay = document.createElement('p');
    bestScoreDisplay.id = 'best-score';
    startScreen.appendChild(bestScoreDisplay);

    let questionIndex = 0;
    let score = 0;
    let timer = 15;
    let interval;

    function updateBestScore() {
        const savedBest = localStorage.getItem('marsBestScore') || 0;
        bestScoreDisplay.innerText = `Рекорд місії: ${savedBest}`;
    }

    function showQuestion(question) {
        clearInterval(interval);
        startTimer();
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;

        question.answers.forEach((answer, i) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            if (question.isImageQuiz) {
                const img = document.createElement('img');
                img.src = answer;
                button.appendChild(img);
                button.classList.add('image-option');
            } else {
                button.innerText = answer;
            }
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);
        });
    }

    function checkAnswer(button, i) {
        clearInterval(interval);
        const correct = questions[questionIndex].correct;
        if (i === correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
            document.querySelectorAll('.answer-btn')[correct].classList.add('correct');
        }
        document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
        setTimeout(nextQuestion, 1500);
    }

    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) showQuestion(questions[questionIndex]);
        else showResult();
    }

    function showResult() {
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        resultScreen.classList.add('fade-in');
        
        const accuracy = Math.round((score / questions.length) * 100);
        const currentBest = localStorage.getItem('marsBestScore') || 0;
        
        let message = "";
        if (score > currentBest) {
            localStorage.setItem('marsBestScore', score);
            message = "НОВИЙ РЕКОРД! Ти справжній підкорювач Марса!";
        } else if (accuracy === 100) message = "Ідеально! Ти готовий до польоту!";
        else if (accuracy >= 70) message = "Чудово! Ти досвідчений дослідник!";
        else message = "Потрібно більше тренувань на базі.";

        resultText.innerText = `Точність: ${accuracy}% \n ${message}`;
        finalScoreDisplay.innerText = score;
        updateBestScore();
    }

    function startTimer() {
        timer = 15;
        timerDisplay.innerText = `Кисень: ${timer}с`;
        scoreDisplay.innerText = `Дані: ${score}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Кисень: ${timer}с`;
            if (timer <= 0) nextQuestion();
        }, 1000);
    }

    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        quizScreen.classList.add('fade-in');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    function createSpaceDust() {
        const container = document.getElementById('space-container');
        if(!container) return;
        const particle = document.createElement('div');
        const icons = ['+', '.', '°', '★', '☄️'];
        particle.innerText = icons[Math.floor(Math.random() * icons.length)];
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.fontSize = Math.random() * 10 + 10 + 'px';
        particle.style.pointerEvents = 'none';
        const duration = Math.random() * 3 + 2;
        particle.style.animationDuration = duration + 's';
        container.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    }

    updateBestScore();
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);
    setInterval(createSpaceDust, 200);
});
