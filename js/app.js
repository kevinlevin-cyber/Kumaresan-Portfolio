function animateSkills() {
    const section = document.querySelector('.skills-grid');
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
        const bars = document.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
            const value = bar.getAttribute('data-progress');
            bar.style.width = value;
        });

        // Run only once
        window.removeEventListener('scroll', animateSkills);
    }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);


// const toTopBtn = document.getElementById("toTopBtn");

//   // Show the button after scrolling down 300px
//   window.onscroll = function () {
//     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//       toTopBtn.style.display = "block";
//     } else {
//       toTopBtn.style.display = "none";
//     }
//   };

//   // Scroll to top smoothly when clicked
//   toTopBtn.addEventListener("click", () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });


//Cube

// window.addEventListener("load", () => {
//     const loader = document.getElementById("preloader");
//     loader.style.opacity = "0";
//     loader.style.transition = "opacity 0.5s ease";
//     setTimeout(() => loader.style.display = "none", 5000);
//   });

