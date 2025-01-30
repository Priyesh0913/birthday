// Countdown Timer
function updateCountdown() {
    const birthday = new Date("Feb 14, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = birthday - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML = `Only ${days} days left till your special day! 🎉`;
}

if (document.getElementById("countdown")) {
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Daily Love Notes
function updateDailyNote() {
    const today = new Date().getDate();
    const notes = {
        1: "Every second with you feels like a dream. ❤️",
        2: "Your smile is my favorite sight in the world. 😊",
        3: "You are the best thing that ever happened to me. 💖",
        4: "Counting down the days until I celebrate YOU. 🎉",
        5: "Your love is the melody my heart beats to. 🎶",
        6: "Every hug from you is my safe place. 🤗",
        7: "I love you more than words can express. 💕",
        8: "You are my greatest gift. 🎁",
        9: "Just seeing your name makes me smile. 😍",
        10: "Happy Rose Day, my love! 🌹",
        11: "Happy Propose Day! I'd say yes a million times. 💍",
        12: "Happy Chocolate Day! You're sweeter than any chocolate. 🍫",
        13: "Happy Teddy Day! You are my cuddly love. 🧸",
        14: "Happy Valentine’s & Birthday, my love! ❤️🎂",
    };

    const note = notes[today] || "I love you endlessly, forever and always. 💕";
    document.getElementById("daily-note").innerHTML = note;
}

if (document.getElementById("daily-note")) {
    updateDailyNote();
}
