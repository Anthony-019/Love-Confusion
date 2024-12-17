// Function to toggle audio play/pause
function toggleAudio() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Optional: If you want to add specific animations to text elements, you can do so here
document.addEventListener("DOMContentLoaded", function() {
    const names = document.querySelectorAll(".name");
    
    // Animate names with different durations
    names.forEach((name, index) => {
        name.style.animationDuration = `${(index + 1) * 3}s`;
    });
});
