
// get the targets
const targets = document.querySelectorAll('.p-img', '.p-flex'); 

// scroll event
window.addEventListener('scroll', function () {
    const scroll = window.scrollY; // get scroll amount
    const windowHeight = window.innerHeight; // get the height of the screen
    for (const target of targets) { // loop the event for all elements which have the same class
      const targetPos = target.getBoundingClientRect().top + scroll; // get the position of the target
      if (scroll > targetPos - windowHeight) { // scroll amount > the target's position
        target.classList.add('is-animated'); // add "is-animated" class to the targets
      }
    }
  });
