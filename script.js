/* -----------------------
   Cursor trail (small circles)
   ----------------------- */
document.addEventListener("mousemove", (e) => {
  // Create small circle, append, then remove after fade
  const dot = document.createElement("div");
  dot.className = "cursor-trail";
  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 800);
});

/* -----------------------
   Reveal rule boxes when visible
   ----------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const ruleBoxes = document.querySelectorAll(".rules-box, .guidelines-box, .info-box, .contact-box, .rule-card");

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = entry.target.classList.contains('info-box') ? 'translateY(0) scale(1)' : 'translateY(0)';
          entry.target.style.transition = 'all 600ms cubic-bezier(.2,.9,.2,1)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    ruleBoxes.forEach(el => {
      // initial hidden state
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      obs.observe(el);
    });
  } else {
    // fallback: make them visible
    ruleBoxes.forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    });
  }
});

