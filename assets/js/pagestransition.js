function leaveTransition() {
    gsap.to("header", { duration: 0.3, opacity: 0, ease: "power3" });
    gsap.to("main", { duration: 0.3, opacity: 0, ease: "power3" });
  }
  
  function contentAnimation() {
    gsap.from("header div:first-child", { duration: 0.5, opacity: 0, ease: "power3" });
    gsap.to(".hero", { duration: 1, clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power3" });
    gsap.from("main", { duration: 0.5, opacity: 0, ease: "power3" });
  }
  
  function delay(n) {
    n = n || 1000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }
  
  barba.init({
    sync: true,
  
    transitions: [
      {
        async leave(data) {
          const done = this.async();
  
          leaveTransition();
          await delay(400);
          done();
        },
  
        async enter(data) {
          contentAnimation();
        },
  
        async once(data) {
          contentAnimation();
        }
      }
    ]
  });