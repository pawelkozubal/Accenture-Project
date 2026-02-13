// Javascript of homepage button

function toggleSection(id) {
      const element = document.getElementById(id);

      if (element.style.display === "block") {
        element.style.display = "none";
      } else {
        element.style.display = "block";
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
}

// Old javascript without smooth scroll
//function toggleSection(id) {
//  const el = document.getElementById(id);
//  if (!el) return;
//  el.classList.toggle("open");
//}

// Navbar script (safe)
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav--open");
    });
  }
});


// AI AND FORM 

async function composePrompt() {
        console.log("Button clicked!"); // Check this in F12 console
        
        const loader = document.getElementById('loadingIndicator');
        const responseBox = document.getElementById('responseText');
        const btn = document.getElementById('submitBtn');

        // 1. Show loader
        loader.style.display = 'block';
        responseBox.textContent = "";
        btn.disabled = true;

        // 2. Collect Data
        const formData = {
            name: document.getElementById('name').value,
            journey: document.getElementById('journey').value,
            education: document.getElementById('education').value,
            workStyle: document.getElementById('work-style').value,
            techExp: document.getElementById('tech-exp').value,
            interest: document.getElementById('tech-interest').value,
            values: document.getElementById('values').value
        };

        try {
            // 3. Send to Python
            const response = await fetch('http://127.0.0.1:5000/generate-prompt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            responseBox.textContent = result.response;
        } catch (err) {
            responseBox.textContent = "Error: Python server not responding.";
            console.error(err);
        } finally {
            loader.style.display = 'none';
            btn.disabled = false;
        }
    }