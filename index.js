Shery.mouseFollower();
Shery.makeMagnet("h5" /* Element to target.*/, {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    let currentScroll = 0;
    let targetScroll = 0;
    const ease = 0.09 // smoothness (lower = smoother)

    function smoothScroll() {
      targetScroll = window.scrollY;
      currentScroll = lerp(currentScroll, targetScroll, ease);

      // Apply transform instead of directly changing scroll
      document.body.style.transform = `translateY(${-currentScroll}px)`;

      requestAnimationFrame(smoothScroll);
    }

    // Prevent double scroll
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    // Create a "fake" body height so scrollbar still works
    const fakeBody = document.createElement("div");
    fakeBody.style.height = document.body.scrollHeight + "px";
    document.body.parentNode.appendChild(fakeBody);

    smoothScroll();

function updateUSAClock() {
    // Choose a US time zone. Example: Eastern Time (ET)
    const options = { timeZone: 'America/New_York', hour12: false, 
                      hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const usaTime = new Intl.DateTimeFormat('en-US', options).format(new Date());

    document.getElementById('clock').innerText =  usaTime;
}

// Update every second
setInterval(updateUSAClock, 1000);

// Initialize clock immediately
updateUSAClock();