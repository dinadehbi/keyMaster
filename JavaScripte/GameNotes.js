document.addEventListener("DOMContentLoaded", function() {
    // Get the button elements by their ids for level 1
    var DoButton = document.getElementById("doButton");
    var laButton = document.getElementById("laButton");
    var solButton = document.getElementById("solButton");
    var reButton = document.getElementById("reButton");

    // Get the button elements by their ids for level 2
    var FaButton2 = document.getElementById("FaButton2");
    var SolButton2 = document.getElementById("SolButton2");
    var SiButton2 = document.getElementById("SiButton2");
    var DoButton2 = document.getElementById("DoButton2");

    // Get the button elements by their ids for level 3
    var SiButton3 = document.getElementById("SiButton3");
    var MiButton3 = document.getElementById("MiButton3");
    var LaButton3 = document.getElementById("LaButton3");
    var SolButton3 = document.getElementById("SolButton3");

    let wrong = new Audio('/Notes/wrong.m4a');
    let correct = new Audio('/Notes/correct.m4a');

    // Define variables outside of DOMContentLoaded event listener
    let correctCount = 0;
    let incorrectCount = 0;

    // Function to calculate results and display
    function calculateResultsAndDisplay() {
        let totalQuestions = correctCount + incorrectCount;
        let correctPercentage = Math.round((correctCount / totalQuestions) * 100);
        window.location.href = `result.html?percentage=${correctPercentage}`;
    }

    // Function to handle correct answers
    function handleCorrectAnswer(button, nextLevelSelector) {
        correctCount++;
        console.log(true);
        button.style.backgroundColor = "#039A00";
        correct.play();
        setTimeout(function() {
            button.style.backgroundColor = "";
            if (nextLevelSelector) {
                document.querySelector(nextLevelSelector).style.display = "flex";
            }
        }, 1000);
        setTimeout(function() {
            if (nextLevelSelector) {
                document.querySelector(nextLevelSelector).style.display = "flex";
            }
        }, 2000);
    }

    // Function to handle wrong answers
    function handleWrongAnswer(button) {
        incorrectCount++;
        console.log(false);
        button.style.backgroundColor = "red";
        wrong.play();
        setTimeout(function() {
            button.style.backgroundColor = "";
        }, 1000);
    }

    // Function to check the answer for level 1
    function checkAnswerLevel1(answer) {
        const correctAnswer = 'Do';
        if (answer === correctAnswer) {
            handleCorrectAnswer(DoButton, '.level2');
            document.querySelector('.level1').style.display = "none";
        } else {
            handleWrongAnswer(DoButton);
        }
    }

    // Function to check the answer for level 2
    function checkAnswerLevel2(answer) {
        const correctAnswer2 = 'Fa';
        if (answer === correctAnswer2) {
            handleCorrectAnswer(FaButton2, '.level3');
            document.querySelector('.level2').style.display = "none";
        } else {
            handleWrongAnswer(FaButton2);
        }
    }

    // Function to check the answer for level 3
    function checkAnswerLevel3(answer) {
        const correctAnswer3 = 'Si';
        if (answer === correctAnswer3) {
            handleCorrectAnswer(SiButton3, null);
            document.querySelector('.level3').style.display = "none";
        } else {
            handleWrongAnswer(SiButton3);
        }
        calculateResultsAndDisplay();
    }

    // Add event listeners for level 1 buttons
    DoButton.addEventListener("click", function() {
        checkAnswerLevel1('Do');
    });

    laButton.addEventListener("click", function() {
        handleWrongAnswer(laButton);
    });

    solButton.addEventListener("click", function() {
        handleWrongAnswer(solButton);
    });

    reButton.addEventListener("click", function() {
        handleWrongAnswer(reButton);
    });

    // Add event listeners for level 2 buttons
    FaButton2.addEventListener("click", function() {
        checkAnswerLevel2('Fa');
    });

    SolButton2.addEventListener("click", function() {
        handleWrongAnswer(SolButton2);
    });

    SiButton2.addEventListener("click", function() {
        handleWrongAnswer(SiButton2);
    });

    DoButton2.addEventListener("click", function() {
        handleWrongAnswer(DoButton2);
    });

    // Add event listeners for level 3 buttons
    SiButton3.addEventListener("click", function() {
        checkAnswerLevel3('Si');
    });

    MiButton3.addEventListener("click", function() {
        handleWrongAnswer(MiButton3);
    });

    LaButton3.addEventListener("click", function() {
        handleWrongAnswer(LaButton3);
    });

    SolButton3.addEventListener("click", function() {
        handleWrongAnswer(SolButton3);
    });
});
