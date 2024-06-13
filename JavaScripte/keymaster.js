document.addEventListener('DOMContentLoaded', function() {
  const paragraphs = [
    'Keymaster is an online platform designed to teach people how to play the piano. We offer comprehensive lessons, interactive tools, and expert guidance to help learners of all levels. Join our community to start your musical journey and master the piano at your own pace!',
    'This is the KetMaster gets you tuned up and ready to start your first lesson in minutes. Our carefully designed lesson plans have everything you need to learn piano , as recommended by our music experts.  we’ll teach you basics like finger placement, reading sheet music, and music theory. As you progress, you’ll learn more challenging techniques. It’s great for complete beginners, advanced players, and everyone in between. paragraph',
    'A Premium+ trial offers full access to all Keymaster features, including unlimited lessons, interactive tools, personalized feedback, advanced tutorials, and community support.',
    'Premium+ pricing operates on a subscription basis. You can opt for monthly or annual plans, with discounts for longer subscriptions. For current rates and details, please refer to our pricing page.'
  ];

  const FAQ1List = document.querySelectorAll('.FAQ1');

  FAQ1List.forEach((FAQ1, index) => {
    const plusElement = FAQ1.querySelector('.plus');
    const paragraphText = paragraphs[index];
    const originalStyles = {
      height: FAQ1.style.height,
      width: FAQ1.style.width,
      display: FAQ1.style.display,
      flexDirection: FAQ1.style.flexDirection,
      textAlign: FAQ1.style.textAlign,
      alignItems: FAQ1.style.alignItems,
      borderRadius: FAQ1.style.borderRadius,
      paddingLeft: FAQ1.style.paddingLeft
    };

    plusElement.addEventListener('click', function() {
      // Rotate animation
      let rotation = 0;
      const rotateInterval = setInterval(function() {
        rotation += 10;
        plusElement.style.transform = `rotate(${rotation}deg)`;
        if (rotation >= 180) {
          clearInterval(rotateInterval);
          // Change content and reset rotation
          if (plusElement.textContent === '+') {
            plusElement.textContent = '−';
            FAQ1.style.height = '12vw';
            FAQ1.style.width = '85vw';
            FAQ1.style.display = 'flex';
            FAQ1.style.flexDirection = 'column';
            FAQ1.style.textAlign = 'center';
            FAQ1.style.alignItems = 'start';
            FAQ1.style.borderRadius = '10px';
            FAQ1.style.paddingLeft = '2vw';

            // Create a paragraph element
            const paragraph = document.createElement('p');
            paragraph.id = "paragraph";
            paragraph.textContent = paragraphText;
            FAQ1.appendChild(paragraph);
          } else {
            plusElement.textContent = '+';

            // Remove the paragraph
            const paragraph = FAQ1.querySelector('p');
            if (paragraph) {
              FAQ1.removeChild(paragraph);
            }
              Object.assign(FAQ1.style, originalStyles);
          }
          plusElement.style.transform = '';
        }
      }, 20);
    });
  });
});


document.getElementById('piano').addEventListener('click', function(){
    window.location.href='/HTML/piano.com';
});



