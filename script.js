function playAudio(button) {
    const audio = document.getElementById('audio');
    
    // Play the audio
    if (audio.paused) {
        audio.play();
        // Change button text to 'Playing...'
        button.textContent = 'thx </3';
        button.disabled = true; // Optionally disable the button
    } else {
        audio.pause();
        // Change button text back to 'Play Song'
        button.textContent = 'Play Song';
        button.disabled = false; // Optionally re-enable the button if needed
    }
}
