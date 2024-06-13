window.addEventListener('load', function() {
  var audioElement = document.getElementById('SolAudio');
  if (audioElement) {
      audioElement.play().catch(function(error) {
          console.log("Playback prevented due to browser policy: ", error);
      });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.piano .set > li');

  function playSound(note) {
      const audio = document.querySelector(`audio[data-note="${note}"]`);
      if (audio) {
          audio.currentTime = 0;
          audio.play().catch((error) => {
              console.log("Autoplay prevented:", error);
          });
      }
  }

  function addActiveClass(element) {
      element.classList.add('active');
  }

  function removeActiveClass(element) {
      element.classList.remove('active');
  }

  // Event listener for mouse clicks
  keys.forEach(key => {
      key.addEventListener('click', () => {
          const note = key.getAttribute('data-note');
          playSound(note);
          addActiveClass(key);
          setTimeout(() => removeActiveClass(key), 200);
      });
  });
});

// Images call variables
const imgElements = [];
for (let i = 1; i <= 24; i++) {
  imgElements.push(document.getElementById(`Notes${i}`));
}

// Notes element call variables
const DoKey = document.getElementById("Do");
const ReKey = document.getElementById("Re");
const MiKey = document.getElementById("Mi");
const FaKey = document.getElementById("Fa");
const SolKey = document.getElementById("Sol");
const LaKey = document.getElementById("La");
const SiKey = document.getElementById("Si");

// Notes audios call variables
const DoAudio = document.getElementById("DoAudio");
const ReAudio = document.getElementById("ReAudio");
const MiAudio = document.getElementById("MiAudio");
const FaAudio = document.getElementById("FaAudio");
const SolAudio = document.getElementById("SolAudio");
const LaAudio = document.getElementById("LaAudio");
const SiAudio = document.getElementById("SiAudio");

// Flag to indicate which image is displayed
let correctCount = 0;
let incorrectCount = 0;



let imgDisplayed = 1;

function updatePercentage() {
  const percentage = Math.round((imgDisplayed / 24) * 100);
  document.getElementById('percentageDisplay').innerText = `${percentage}%`;
  document.querySelector('.timing').style.width = `${percentage}%`;
  console.log(percentage);
}
// calcule function correct and incorrect answers

function calculateResultsAndDisplay() {
    let totalQuestions = correctCount + incorrectCount;
    let correctPercentage = Math.round((correctCount / totalQuestions) * 100);
    window.location.href = `../Html/result2.html?percentage=${correctPercentage}`;
}

SolKey.addEventListener('click', function() {
  if (imgDisplayed === 1) {
      console.log(true);
      imgElements[0].style.display = "none";
      imgElements[1].style.display = "block";
      LaAudio.play();
      imgDisplayed = 2;
      correctCount++;
    } else if (imgDisplayed === 3) {
      console.log(true);
      imgElements[2].style.display = "none";
      imgElements[3].style.display = "block";
      SolAudio.play();
      imgDisplayed = 4;
      correctCount++;

  } else if (imgDisplayed === 4) {
      console.log(true);
      imgElements[3].style.display = "none";
      imgElements[4].style.display = "block";
      LaAudio.play();
      imgDisplayed = 5;
      correctCount++;

  } else if (imgDisplayed === 7) {
      console.log(true);
      imgElements[6].style.display = "none";
      imgElements[7].style.display = "block";
      LaAudio.play();
      imgDisplayed = 8;
      correctCount++;

  } else if (imgDisplayed === 10) {
      console.log(true);
      imgElements[9].style.display = "none";
      imgElements[10].style.display = "block";
      LaAudio.play();
      imgDisplayed = 11;
      correctCount++;

  } else if (imgDisplayed === 13) {
      console.log(true);
      imgElements[13].style.display = "none";
      imgElements[14].style.display = "block";
      LaAudio.play();
      imgDisplayed = 14;
      correctCount++;

  } else {
      console.log(false);
      incorrectCount++;
  }
  updatePercentage();
});

// Add click event listener for LaKey
LaKey.addEventListener('click', function() {
  if (imgDisplayed === 2) {
      console.log(true);
      imgElements[1].style.display = "none";
      imgElements[2].style.display = "block";
      SolAudio.play();
      imgDisplayed = 3;
      correctCount++;

  } else if (imgDisplayed === 5) {
      console.log(true);
      imgElements[4].style.display = "none";
      imgElements[5].style.display = "block";
      SiAudio.play();
      imgDisplayed = 6;
      correctCount++;

  } else if (imgDisplayed === 8) {
      console.log(true);
      imgElements[7].style.display = "none";
      imgElements[8].style.display = "block";
      SiAudio.play();
      imgDisplayed = 9;
      correctCount++;

  } else if (imgDisplayed === 11) {
      console.log(true);
      imgElements[10].style.display = "none";
      imgElements[11].style.display = "block";
      SiAudio.play();
      imgDisplayed = 12;
      correctCount++;

  } else if (imgDisplayed === 14) {
      console.log(true);
      imgElements[14].style.display = "none";
      imgElements[15].style.display = "block";
      SiAudio.play();
      imgDisplayed = 15;
      correctCount++;

  } else {
      console.log(false);
      incorrectCount++;

  }
  updatePercentage();
});

// Add click event listener for SiKey
SiKey.addEventListener('click', function() {
  if (imgDisplayed === 6) {
      console.log(true);
      imgElements[5].style.display = "none";
      imgElements[6].style.display = "block";
      SolAudio.play();
      imgDisplayed = 7;
      correctCount++;

  } else if (imgDisplayed === 9) {
      console.log(true);
      imgElements[8].style.display = "none";
      imgElements[9].style.display = "block";
      SolAudio.play();
      imgDisplayed = 10;
      correctCount++;

  } else if (imgDisplayed === 12) {
      console.log(true);
      imgElements[11].style.display = "none";
      imgElements[13].style.display = "block";
      SolAudio.play();
      imgDisplayed = 13;
      correctCount++;

  } else if (imgDisplayed === 15) {
      console.log(true);
      imgElements[15].style.display = "none";
      imgElements[16].style.display = "block";
      DoAudio.play();
      imgDisplayed = 16;
      correctCount++;

  } else {
    console.log(false);
    incorrectCount++;

    }
    updatePercentage();
    });
    
    // Add click event listener for DoKey
    DoKey.addEventListener('click', function() {
    if (imgDisplayed === 16) {
    console.log(true);
    imgElements[16].style.display = "none";
    imgElements[17].style.display = "block";
    ReAudio.play();
    imgDisplayed = 17;
    correctCount++;

    } else {
    console.log(false);
    incorrectCount++;

    }
    updatePercentage();
    });
    
        // Add click event listener for ReKey
        ReKey.addEventListener('click', function() {
        if (imgDisplayed === 17) {
        console.log(true);
        imgElements[17].style.display = "none";
        imgElements[18].style.display = "block";
        MiAudio.play();
        imgDisplayed = 18;
        correctCount++;

        } else if (imgDisplayed === 20) {
        console.log(true);
        imgElements[21].style.display = "none";
        imgElements[22].style.display = "block";
        MiAudio.play();
        imgDisplayed = 21;
        correctCount++;
        } else {
        console.log(false);
        incorrectCount++;
        }
        updatePercentage();
        });
    
    // Add click event listener for MiKey
    MiKey.addEventListener('click', function() {
    if (imgDisplayed === 18) {
    console.log(true);
    imgElements[18].style.display = "none";
    imgElements[19].style.display = "block";
    FaAudio.play();
    imgDisplayed = 19;
    correctCount++;

    } else if (imgDisplayed === 21) {
    console.log(true);
    imgElements[22].style.display = "none";
    imgElements[23].style.display = "block";
    FaAudio.play();
    imgDisplayed = 22;
    correctCount++;

    } else {
    console.log(false);
    incorrectCount++;

    }
    updatePercentage();
    });
    
    // Add click event listener for FaKey
    FaKey.addEventListener('click', function() {
        if (imgDisplayed === 19) {
            console.log(true);
            imgElements[19].style.display = "none";
            imgElements[21].style.display = "block";
            ReAudio.play();
            imgDisplayed = 20;
        }else if (imgDisplayed === 22) {
            console.log(true);
            imgElements[23].style.display = "none";
            imgDisplayed = 23; 
            calculateResultsAndDisplay();


        }  else {
            console.log(false);
            incorrectCount++;
        }
        updatePercentage();

    });
    
    
    // Add click event listener to document body to listen for clicks
    document.body.addEventListener('click', function(event) {
    if (![SolKey, LaKey, SiKey, DoKey, ReKey, MiKey, FaKey].includes(event.target)) {
    console.log(false);
    incorrectCount++;
    updatePercentage();

    }
    });