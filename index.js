fetch("/api/render", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ scene: document.getElementById("scene").innerText })
})
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById("render-status").innerText = "Rendering complete!";
      document.getElementById("video-container").innerHTML = `
        <video src="${data.videoUrl}" autoplay controls style="margin-top: 20px; max-width: 90%;"></video>
      `;
    } else {
      document.getElementById("render-status").innerText = "❌ Failed to render.";
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("render-status").innerText = "❌ Error contacting server.";
  });
