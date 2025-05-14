const testimonials = [
    {
      text: "CyberX91's Red Team identified vulnerabilities in our infrastructure that we never knew existed. Their detailed remediation plan helped us strengthen our security posture significantly.",
      name: "Sarah Johnson",
      title: "CISO, FinTech Innovations Inc."
    },
    {
      text: "We implemented CyberX91's security solution across our enterprise and saw a 75% reduction in security incidents within the first quarter. Their technology is unmatched.",
      name: "Alicia Rodriguez",
      title: "VP of Technology, HealthNet Systems"
    },
    {
      text: "Their AI-driven monitoring tools offer a new level of real-time insight. We're catching threats before they escalate. CyberX91 is a game-changer for us.",
      name: "Daniel Smith",
      title: "Head of IT, SafeCom Ltd."
    }
  ];
  
  let currentIndex = 0;
  
  const content = document.getElementById("testimonial-content");
  const dots = document.getElementById("dots");
  
  function renderTestimonial(index) {
    const t = testimonials[index];
    content.innerHTML = `
      <div class="testimonial-box">
        <p class="testimonial-text">${t.text}</p>
        <p class="client-name">${t.name}</p>
        <p class="client-title">${t.title}</p>
      </div>
    `;
  
    dots.innerHTML = testimonials
      .map((_, i) =>
        `<span class="${i === index ? "active" : ""}" onclick="changeSlide(${i - currentIndex})"></span>`
      )
      .join("");
  }
  
  function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = testimonials.length - 1;
    if (currentIndex >= testimonials.length) currentIndex = 0;
    renderTestimonial(currentIndex);
  }
  
  window.onload = () => {
    renderTestimonial(currentIndex);
  };

  