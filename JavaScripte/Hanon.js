// Metronome functionality
let metronomeAudio = new Audio('/Notes/metronome.mp3');
metronomeAudio.loop = true;
let metronomeIcon = document.getElementById('Metronome');
let audioPlaying = false;

metronomeIcon.addEventListener('click', function() {
    if (!audioPlaying) {
        metronomeAudio.play();
        audioPlaying = true;
    } else {
        metronomeAudio.pause();
        metronomeAudio.currentTime = 0; // Reset audio to the beginning
        audioPlaying = false;
    }
});

// Stop audio if another element is clicked
document.addEventListener('click', function(event) {
    if (event.target !== metronomeIcon && audioPlaying) {
        metronomeAudio.pause();
        metronomeAudio.currentTime = 0; // Reset audio to the beginning
        audioPlaying = false;
    }
});

// Show letter notes functionality
const paragraphs = document.querySelectorAll('p');
let letternotes = document.getElementById('letter');
let isHidden = false;

letternotes.addEventListener('click', function() {
    paragraphs.forEach(paragraph => {
        if (!isHidden) {
            paragraph.style.color = "white";
        } else {
            paragraph.style.color = "black"; // Or any other display property you want
        }
    });
    isHidden = !isHidden;
});

// Fullscreen toggle functionality
const fullscreen = document.getElementById('fullscrean');

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

fullscreen.addEventListener('click', toggleFullscreen);

// Audio sources
const audioSources = {
    Q: '../Notes/q.mp3',
    2: '../Notes/2.mp3',
    W: '../Notes/w.mp3',
    3: '../Notes/3.mp3',
    E: '../Notes/E.mp3',
    R: '../Notes/r.mp3',
    5: '../Notes/5.mp3',
    T: '../Notes/t.mp3',
    6: '../Notes/6.mp3',
    Y: '../Notes/y.mp3',
    7: '../Notes/7.mp3',
    U: '../Notes/u.mp3',
    I: '../Notes/i.mp3',
    9: '../Notes/9.mp3',
    O: '../Notes/o.mp3',
    0: '../Notes/0.mp3',
    P: '../Notes/p.mp3',
    Z: '../Notes/z.mp3',
    S: '../Notes/s.mp3',
    X: '../Notes/x.mp3',
    D: '../Notes/d.mp3',
    C: '../Notes/c.mp3',
    F: '../Notes/f.mp3',
    V: '../Notes/v.mp3',
    B: '../Notes/b.mp3',
    H: '../Notes/h.mp3',
    N: '../Notes/n.mp3',
    J: '../Notes/j.mp3',
    M: '../Notes/m.mp3',
    
    C3: '../Notes/q.mp3',
    'C#3': '../Notes/2.mp3',
    D3: '../Notes/w.mp3',
    'D#3': '../Notes/3.mp3',
    E3: '../Notes/E.mp3',
    F3: '../Notes/r.mp3',
    'F#3': '../Notes/5.mp3',
    G3: '../Notes/t.mp3',
    'GG3': '../Notes/6.mp3',
    A3: '../Notes/y.mp3',
    'A#3': '../Notes/7.mp3',
    'B3': '../Notes/u.mp3',
    C4: '../Notes/i.mp3',
    'C#4': '../Notes/9.mp3',
    D4: '../Notes/o.mp3',
    'D#4': '../Notes/0.mp3',
    E4: '../Notes/p.mp3',
    F4: '../Notes/s.mp3',
    'F#4': '../Notes/d.mp3',
    G4: '../Notes/g.mp3',
    'G#4': '../Notes/h.mp3',
    A4: '../Notes/j.mp3',
    'A#4': '../Notes/l.mp3',
};

document.querySelectorAll('.set li').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        const audioSrc = audioSources[note];

        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();

            // Add active class for visual feedback
            key.classList.add('active');

            // Remove active class after audio ends
            audio.addEventListener('ended', () => {
                key.classList.remove('active');
            });
        }
    });
});

document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // Convert the pressed key to uppercase
    const audioSrc = audioSources[key];

    if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();

        // Toggle the 'active' class on the pressed key
        const keyElement = document.querySelector(`.set li[data-note="${key}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
        }
    }
});

document.addEventListener('keyup', function(event) {
    const key = event.key.toUpperCase(); 
    const keyElement = document.querySelector(`.set li[data-note="${key}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll(".divs");
    const container = document.querySelector(".container");
    
    let delay = 1000;
    
    divs.forEach((div, index) => {
      setTimeout(() => {
        div.style.opacity = 1;
      }, delay * (index + 1));
    });
    
    container.addEventListener("animationend", () => {
      console.log("Animation ended.");
    });
  
    const innerDivs = [
      document.querySelector('.innerdiv'),
      document.querySelector('.innerdiv2'),
      document.querySelector('.innerdiv3'),
      document.querySelector('.innerdiv4'),
      document.querySelector('.innerdiv5'),
      document.querySelector('.innerdiv6'),
      document.querySelector('.innerdiv7'),
      document.querySelector('.innerdiv8'),
      document.querySelector('.innerdiv9'),
      document.querySelector('.innerdiv10'),
      document.querySelector('.innerdiv11'),
      document.querySelector('.innerdiv12'),
      document.querySelector('.innerdiv13'),
      document.querySelector('.innerdiv14'),
      document.querySelector('.innerdiv15'),
      document.querySelector('.innerdiv16'),
      document.querySelector('.innerdiv17'),
      document.querySelector('.innerdiv18'),
      document.querySelector('.innerdiv19'),
      document.querySelector('.innerdiv20'),
      document.querySelector('.innerdiv21'),
      document.querySelector('.innerdiv22'),
      document.querySelector('.innerdiv23'),
      document.querySelector('.innerdiv24'),
    ];
  
    innerDivs.forEach(innerDiv => {
      if (innerDiv) {
        innerDiv.addEventListener('animationend', () => {
          innerDiv.style.display = 'none';
        });
      }
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    // Hide all innerdiv elements initially
    const innerDivs = document.querySelectorAll('.innerdiv, .innerdiv2, .innerdiv3, .innerdiv4, .innerdiv5, .innerdiv6, .innerdiv7, .innerdiv8, .innerdiv9, .innerdiv10, .innerdiv11, .innerdiv12, .innerdiv13, .innerdiv14, .innerdiv15, .innerdiv16, .innerdiv17, .innerdiv18, .innerdiv19, .innerdiv20, .innerdiv21, .innerdiv22, .innerdiv23, .innerdiv24');
    innerDivs.forEach(div => {
      div.style.display = 'none';
    });

    // Display the elements after 7 seconds
    setTimeout(() => {
      innerDivs.forEach(div => {
        div.style.display = 'block';
      });
    }, 7000); // 7000 milliseconds = 7 seconds
});
