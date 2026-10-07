// ======================================================
// CUSTOMIZE YOUR WEBSITE HERE
// ======================================================
const HER_USERNAME = "LAISA"; // Change to her Instagram ID or nickname
const CUSTOM_PASSWORD = "SHAILENDRA"; // Change to your custom secret password
const HER_NAME = "LAISA BABU";
const YOUR_NAME = "SOLU VOI";
const MAIN_TITLE = "Almost One Year Together Through College ❤️";
const MAIN_SUBTITLE = "A collection of moments, memories, smiles, and everything in between.";

// ======================================================
// MUSIC MANAGEMENT
// ======================================================
// Put your MP3 file inside the 'music' folder.
// Rename it to 'song.mp3' OR change MUSIC_FILE path below.
const MUSIC_FILE = "music/song.mp3";

// ======================================================
// MEMORY GALLERY DATA (Easy to add/edit photos!)
// ======================================================
// To add another photo, copy an object block and change filename, title, date, and quote.
const memories = [
    {
        image: "images/photo1.jpg",
        title: "Our First Memory",
        date: "2025",
        quote: "Some moments become memories before we even realize it."
    },
    {
        image: "images/photo2.jpg",
        title: "A Beautiful Day",
        date: "2025",
        quote: "The best memories are the ones we never planned."
    },
    {
        image: "images/photo3.jpg",
        title: "College Campus Walks",
        date: "2025",
        quote: "Even ordinary corridors felt magical with you."
    },
    {
        image: "images/photo4.jpg",
        title: "Shared Laughter",
        date: "2025",
        quote: "Your laugh is my favorite sound in the world."
    },
    {
        image: "images/photo5.jpg",
        title: "Late Night Talks",
        date: "2025",
        quote: "Hours turned into minutes when we talked about everything."
    },
    {
        image: "images/photo6.jpg",
        title: "Coffee & Smiles",
        date: "2025",
        quote: "Coffee tastes better when shared across from you."
    },
    {
        image: "images/photo7.jpg",
        title: "Unplanned Adventures",
        date: "2025",
        quote: "Getting lost with you was the best part of the day."
    },
    {
        image: "images/photo8.jpg",
        title: "Little Notes & Gestures",
        date: "2025",
        quote: "It's the little things that mean the absolute most."
    },
    {
        image: "images/photo9.jpg",
        title: "Looking Ahead",
        date: "2025",
        quote: "Every tomorrow with you is something to look forward to."
    },
    {
        image: "images/photo10.jpg",
        title: "Almost One Year",
        date: "2026",
        quote: "365 days of happiness, and we're just getting started."
    }
];

// ======================================================
// TIMELINE DATA
// ======================================================
const timelineData = [
    {
        date: "Early 2025",
        title: "Where It Started ❤️",
        description: "The moment our paths crossed and everything shifted.",
        image: "images/photo1.jpg"
    },
    {
        date: "Spring 2025",
        title: "The First Conversations 💬",
        description: "From hesitant hellos to endless talks that made time stand still.",
        image: "images/photo2.jpg"
    },
    {
        date: "Summer 2025",
        title: "The First Memories 📸",
        description: "Capturing smiles, sunshine, and the start of something truly special.",
        image: "images/photo3.jpg"
    },
    {
        date: "Fall 2025",
        title: "College Days 🎓",
        description: "Navigating classes, campus corners, and study breaks together.",
        image: "images/photo4.jpg"
    },
    {
        date: "Late 2025",
        title: "More Moments Together ✨",
        description: "Every weekend brought new laughter, comfort, and warmth.",
        image: "images/photo5.jpg"
    },
    {
        date: "Nearly 1 Year",
        title: "Almost One Year ❤️",
        description: "Looking back at how much we've grown and shared side by side.",
        image: "images/photo10.jpg"
    },
    {
        date: "Future",
        title: "The Story Continues...",
        description: "Countless adventures waiting for us around every corner.",
        image: "images/photo9.jpg"
    }
];

// ======================================================
// PHOTO STORY SECTIONS DATA
// ======================================================
const photoStoryData = [
    {
        label: "MEMORY 01",
        title: "A Moment Worth Remembering",
        description: "Some memories stay with us long after the moment has passed, shining brightly in our hearts.",
        image: "images/photo1.jpg"
    },
    {
        label: "MEMORY 02",
        title: "The Magic of Simple Days",
        description: "We didn't need grand plans. Just being in the same space made ordinary days extraordinary.",
        image: "images/photo2.jpg"
    },
    {
        label: "MEMORY 03",
        title: "Campus Corners & Smiles",
        description: "Every hallway and courtyard holds an echo of our laughter and quiet conversations.",
        image: "images/photo3.jpg"
    },
    {
        label: "MEMORY 04",
        title: "Countless Shared Dreams",
        description: "Talking about our goals, our favorite things, and everything we want to achieve.",
        image: "images/photo4.jpg"
    },
    {
        label: "MEMORY 05",
        title: "Through Every Season",
        description: "From warm sunny afternoons to chilly evenings, every season with you feels right.",
        image: "images/photo5.jpg"
    },
    {
        label: "MEMORY 06",
        title: "Almost One Year Strong",
        description: "A full year of patience, kindness, care, and beautiful memories we will always cherish.",
        image: "images/photo10.jpg"
    }
];

// ======================================================
// QUOTES DATA
// ======================================================
const quotesData = [
    { quote: "Some people become memories. Some become a part of your story.", author: "Our Story" },
    { quote: "College gave us memories, but you made them special.", author: "Campus Days" },
    { quote: "One picture can hold an entire moment in time.", author: "Memories" },
    { quote: "Some of my favorite days are the ones that have you in them.", author: "Everyday" },
    { quote: "Time moves forward, but some moments stay exactly where they belong.", author: "Timeless" },
    { quote: "Maybe the best part of this journey is that it is still being written.", author: "Looking Ahead" },
    { quote: "You are my favorite notification and my favorite person.", author: "Always You" },
    { quote: "With you, even quiet moments feel full of life.", author: "Peace" },
    { quote: "Every smile of yours is a reminder of how lucky I am.", author: "Gratitude" }
];

// ======================================================
// TRIVIA / GUESS THE MEMORY GAME DATA
// ======================================================
const triviaData = [
    {
        image: "images/photo1.jpg",
        question: "Which memory is this?",
        options: ["Our First Memory", "Library Study Session", "Coffee Date"],
        correct: 0
    },
    {
        image: "images/photo3.jpg",
        question: "Where were we when this photo was captured?",
        options: ["Campus Courtyard", "Coffee Shop", "Walking After Class"],
        correct: 0
    },
    {
        image: "images/photo6.jpg",
        question: "What was the mood of this day?",
        options: ["Quiet & Relaxed", "Laughter & Coffee", "Study Panic"],
        correct: 1
    }
];

// ======================================================
// LOVE LETTER TEXT
// ======================================================
const loveLetterText = `Dear You,

Looking back at all the moments we have shared, it is hard to choose just one favorite memory.

There have been ordinary days, funny moments, unexpected conversations, and little memories that somehow became special.

This website is just a small collection of those moments.

And maybe the best part is that our story is still being written.

With lots of memories still to come,
❤️`;

// ======================================================
// APPLICATION INITIALIZATION & LOGIC
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
    initCustomCursor();
    initParticleCanvas();
    setupLoginForm();
    setupNavigation();
});

// Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById("custom-cursor");
    const follower = document.getElementById("custom-cursor-follower");
    if (!cursor || !follower) return;

    window.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        follower.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    });
}

// Particle Canvas Background
function initParticleCanvas() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(width > 768 ? 40 : 20, 50);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2.5 + 1,
            speedY: (Math.random() * 0.5 + 0.2) * -1,
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.6 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "rgba(255, 77, 109, 0.6)";

        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y < 0) {
                p.y = height;
                p.x = Math.random() * width;
            }

            ctx.globalAlpha = p.opacity;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    animate();
}

// Login Form Handling
function setupLoginForm() {
    const loginForm = document.getElementById("login-form");
    const loginScreen = document.getElementById("login-screen");
    const mainWebsite = document.getElementById("main-website");
    const errorMsg = document.getElementById("login-error");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Pre-populate placeholders with hint or custom text if desired
    usernameInput.placeholder = HER_USERNAME;
    passwordInput.placeholder = CUSTOM_PASSWORD;

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const enteredUser = usernameInput.value.trim();
        const enteredPass = passwordInput.value.trim();

        // Check credentials (case-insensitive for username convenience)
        if (enteredUser.toLowerCase() === HER_USERNAME.toLowerCase() && enteredPass === CUSTOM_PASSWORD) {
            errorMsg.style.display = "none";
            
            // Trigger Confetti & Heart animation
            if (typeof confetti === "function") {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff4d6d', '#ff758c', '#ffffff']
                });
            }

            // Fade out login screen
            loginScreen.style.transition = "opacity 0.8s ease";
            loginScreen.style.opacity = "0";
            setTimeout(() => {
                loginScreen.style.display = "none";
                mainWebsite.style.display = "block";
                startBackgroundMusic();
                initializeMainContent();
            }, 800);
        } else {
            errorMsg.style.display = "block";
            loginForm.classList.add("shake");
            setTimeout(() => loginForm.classList.remove("shake"), 500);
        }
    });
}

// Background Music System
let bgAudio = null;
function startBackgroundMusic() {
    bgAudio = new Audio(MUSIC_FILE);
    bgAudio.loop = true;
    bgAudio.volume = 0.5;

    bgAudio.play().catch(() => {
        console.log("Audio autoplay prevented or file missing.");
    });

    const musicWidget = document.getElementById("music-widget");
    const toggleBtn = document.getElementById("music-toggle-btn");
    const muteBtn = document.getElementById("music-mute-btn");
    const statusText = toggleBtn.querySelector(".music-status-text");

    musicWidget.style.display = "flex";

    let isPlaying = true;
    toggleBtn.addEventListener("click", () => {
        if (isPlaying) {
            bgAudio.pause();
            statusText.textContent = "Paused";
            toggleBtn.querySelector(".music-icon").textContent = "▶️";
            isPlaying = false;
        } else {
            bgAudio.play();
            statusText.textContent = "Playing";
            toggleBtn.querySelector(".music-icon").textContent = "🎵";
            isPlaying = true;
        }
    });

    let isMuted = false;
    muteBtn.addEventListener("click", () => {
        isMuted = !isMuted;
        bgAudio.muted = isMuted;
        muteBtn.textContent = isMuted ? "🔊" : "🔇";
    });
}

// Navigation Setup
function setupNavigation() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// Initialize Main Website Dynamic Content
function initializeMainContent() {
    renderCounters();
    renderTimeline();
    renderGallery();
    renderPhotoStory();
    renderQuotes();
    setupGames();
    setupLoveLetter();
    setupSurprises();
    setupFinalSurprise();
}

// Counters Animation
function renderCounters() {
    const counters = document.querySelectorAll(".counter-number");
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => {
                    const target = +counter.getAttribute("data-target");
                    let count = 0;
                    const increment = target / 40;
                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            counter.textContent = target + (target > 1 ? "+" : "");
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(count);
                        }
                    }, 35);
                });
            }
        });
    }, { threshold: 0.5 });

    const section = document.querySelector(".counters-section");
    if (section) observer.observe(section);
}

// Timeline Rendering
function renderTimeline() {
    const container = document.getElementById("timeline-container");
    if (!container) return;

    container.innerHTML = timelineData.map((item, index) => `
        <div class="timeline-item" style="animation: fadeIn 0.6s ease ${index * 0.2}s">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-panel">
                <span class="timeline-date">${item.date}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.image ? `<img src="${item.image}" alt="${item.title}" class="timeline-img">` : ""}
            </div>
        </div>
    `).join("");
}

// Memory Gallery & Lightbox
let currentLightboxIndex = 0;
function renderGallery() {
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;

    grid.innerHTML = memories.map((mem, index) => `
        <div class="memory-card glass-panel" data-index="${index}">
            <div class="memory-img-wrap">
                <img src="${mem.image}" alt="${mem.title}" loading="lazy">
            </div>
            <div class="memory-info">
                <div class="memory-header-row">
                    <h3>${mem.title}</h3>
                    <span class="memory-heart-badge">❤️</span>
                </div>
                <div class="memory-date">${mem.date}</div>
                <p class="memory-quote">"${mem.quote}"</p>
            </div>
        </div>
    `).join("");

    // Lightbox triggers
    document.querySelectorAll(".memory-card").forEach(card => {
        card.addEventListener("click", () => {
            currentLightboxIndex = parseInt(card.getAttribute("data-index"));
            openLightbox(currentLightboxIndex);
        });
    });
}

function openLightbox(index) {
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img");
    const title = document.getElementById("lightbox-title");
    const date = document.getElementById("lightbox-date");
    const quote = document.getElementById("lightbox-quote");

    const mem = memories[index];
    img.src = mem.image;
    title.textContent = mem.title;
    date.textContent = mem.date;
    quote.textContent = `"${mem.quote}"`;

    modal.style.display = "flex";

    document.getElementById("lightbox-close").onclick = () => modal.style.display = "none";
    document.getElementById("lightbox-prev").onclick = () => {
        currentLightboxIndex = (currentLightboxIndex - 1 + memories.length) % memories.length;
        openLightbox(currentLightboxIndex);
    };
    document.getElementById("lightbox-next").onclick = () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % memories.length;
        openLightbox(currentLightboxIndex);
    };

    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };

    // Keyboard nav
    window.onkeydown = (e) => {
        if (modal.style.display === "flex") {
            if (e.key === "Escape") modal.style.display = "none";
            if (e.key === "ArrowLeft") document.getElementById("lightbox-prev").click();
            if (e.key === "ArrowRight") document.getElementById("lightbox-next").click();
        }
    };
}

// Cinematic Photo Story Rows
function renderPhotoStory() {
    const container = document.getElementById("photo-story-container");
    if (!container) return;

    container.innerHTML = photoStoryData.map(story => `
        <div class="story-row">
            <div class="story-img-box">
                <img src="${story.image}" alt="${story.title}" loading="lazy">
            </div>
            <div class="story-text">
                <span>${story.label}</span>
                <h3>${story.title}</h3>
                <p>${story.description}</p>
            </div>
        </div>
    `).join("");
}

// Quotes Section
function renderQuotes() {
    const grid = document.getElementById("quotes-grid");
    if (!grid) return;

    grid.innerHTML = quotesData.map(q => `
        <div class="quote-card glass-panel">
            <p>"${q.quote}"</p>
            <span>— ${q.author}</span>
        </div>
    `).join("");
}

// Games Setup
function setupGames() {
    const tabBtns = document.querySelectorAll(".game-tab-btn");
    const wrappers = document.querySelectorAll(".game-wrapper");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            wrappers.forEach(w => w.style.display = "none");

            btn.classList.add("active");
            const target = document.getElementById(btn.getAttribute("data-target"));
            if (target) target.style.display = "block";
        });
    });

    initMemoryMatchGame();
    initPuzzleGame();
    initTriviaGame();
}

// Game 1: Memory Matching
function initMemoryMatchGame() {
    const symbols = ['❤️', '🌸', '✨', '🎓', '📸', '💫', '🎁', '⭐'];
    let cards = [...symbols, ...symbols];
    cards.sort(() => Math.random() - 0.5);

    const grid = document.getElementById("matching-grid");
    const movesEl = document.getElementById("match-moves");
    const scoreEl = document.getElementById("match-score");
    const timerEl = document.getElementById("match-timer");
    const successMsg = document.getElementById("match-success");
    const restartBtn = document.getElementById("restart-match-btn");

    if (!grid) return;

    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let timer = 0;
    let timerInterval = null;
    let gameStarted = false;

    function startTimer() {
        if (!gameStarted) {
            gameStarted = true;
            timerInterval = setInterval(() => {
                timer++;
                timerEl.textContent = timer + "s";
            }, 1000);
        }
    }

    function renderBoard() {
        grid.innerHTML = "";
        cards.forEach((symbol, index) => {
            const tile = document.createElement("div");
            tile.classList.add("memory-tile");
            tile.dataset.symbol = symbol;
            tile.dataset.index = index;
            tile.addEventListener("click", () => handleTileClick(tile, symbol));
            grid.appendChild(tile);
        });
        successMsg.style.display = "none";
        matchedPairs = 0;
        moves = 0;
        timer = 0;
        gameStarted = false;
        clearInterval(timerInterval);
        movesEl.textContent = "0";
        scoreEl.textContent = "0";
        timerEl.textContent = "0s";
    }

    function handleTileClick(tile, symbol) {
        startTimer();
        if (tile.classList.contains("flipped") || tile.classList.contains("matched") || flippedCards.length >= 2) return;

        tile.textContent = symbol;
        tile.classList.add("flipped");
        flippedCards.push(tile);

        if (flippedCards.length === 2) {
            moves++;
            movesEl.textContent = moves;
            const [card1, card2] = flippedCards;

            if (card1.dataset.symbol === card2.dataset.symbol) {
                card1.classList.add("matched");
                card2.classList.add("matched");
                matchedPairs++;
                scoreEl.textContent = matchedPairs;
                flippedCards = [];

                if (matchedPairs === symbols.length) {
                    clearInterval(timerInterval);
                    successMsg.style.display = "block";
                    if (typeof confetti === "function") confetti({ particleCount: 80, spread: 60 });
                }
            } else {
                setTimeout(() => {
                    card1.textContent = "";
                    card1.classList.remove("flipped");
                    card2.textContent = "";
                    card2.classList.remove("flipped");
                    flippedCards = [];
                }, 700);
            }
        }
    }

    restartBtn.addEventListener("click", renderBoard);
    renderBoard();
}

// Game 2: Photo Puzzle (3x3 Sliding / Tile arrangement simulation)
function initPuzzleGame() {
    const board = document.getElementById("puzzle-board");
    const movesEl = document.getElementById("puzzle-moves");
    const successMsg = document.getElementById("puzzle-success");
    const restartBtn = document.getElementById("restart-puzzle-btn");
    if (!board) return;

    // Simplified 3x3 interactive click puzzle using images/puzzle.jpg
    let tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let moves = 0;

    function renderPuzzle() {
        board.innerHTML = "";
        tiles.forEach((tileVal, idx) => {
            const tile = document.createElement("div");
            tile.classList.add("puzzle-tile");
            if (tileVal === 8) {
                tile.classList.add("empty");
            } else {
                const x = (tileVal % 3) * 100;
                const y = Math.floor(tileVal / 3) * 100;
                tile.style.backgroundImage = "url('images/puzzle.jpg')";
                tile.style.backgroundPosition = `-${x}px -${y}px`;
                tile.addEventListener("click", () => moveTile(idx));
            }
            board.appendChild(tile);
        });
        successMsg.style.display = "none";
        moves = 0;
        movesEl.textContent = "0";
    }

    function moveTile(idx) {
        const emptyIdx = tiles.indexOf(8);
        const validMoves = [
            emptyIdx - 1, emptyIdx + 1, emptyIdx - 3, emptyIdx + 3
        ];
        // Prevent wrap around for row boundaries if needed, or simple adjacency check
        const row = Math.floor(idx / 3);
        const emptyRow = Math.floor(emptyIdx / 3);
        const col = idx % 3;
        const emptyCol = emptyIdx % 3;

        const isAdjacent = Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;

        if (isAdjacent) {
            tiles[emptyIdx] = tiles[idx];
            tiles[idx] = 8;
            moves++;
            movesEl.textContent = moves;
            renderPuzzle();

            // Check win
            if (tiles.every((val, i) => val === i)) {
                successMsg.style.display = "block";
                if (typeof confetti === "function") confetti({ particleCount: 80, spread: 60 });
            }
        }
    }

    // Shuffle slightly for initial play
    function shuffle() {
        for (let i = 0; i < 50; i++) {
            const emptyIdx = tiles.indexOf(8);
            const neighbors = [];
            if (emptyIdx % 3 > 0) neighbors.push(emptyIdx - 1);
            if (emptyIdx % 3 < 2) neighbors.push(emptyIdx + 1);
            if (emptyIdx >= 3) neighbors.push(emptyIdx - 3);
            if (emptyIdx < 6) neighbors.push(emptyIdx + 3);
            const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
            tiles[emptyIdx] = tiles[randomNeighbor];
            tiles[randomNeighbor] = 8;
        }
    }

    restartBtn.addEventListener("click", () => {
        tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        shuffle();
        renderPuzzle();
    });

    shuffle();
    renderPuzzle();
}

// Game 3: Guess The Memory Trivia
function initTriviaGame() {
    const container = document.getElementById("trivia-question-container");
    if (!container) return;

    let currentQ = 0;

    function loadQuestion() {
        if (currentQ >= triviaData.length) {
            container.innerHTML = `<h3 style="color:var(--secondary-pink);">You completed all trivia questions! ❤️</h3>`;
            return;
        }

        const q = triviaData[currentQ];
        container.innerHTML = `
            <div class="trivia-box">
                <img src="${q.image}" alt="Guess" class="trivia-img" id="trivia-img">
                <div class="trivia-question">${q.question}</div>
                <div class="trivia-options">
                    ${q.options.map((opt, i) => `<button class="trivia-opt-btn" data-index="${i}">${opt}</button>`).join("")}
                </div>
                <div id="trivia-feedback" style="margin-top:12px; font-weight:600;"></div>
            </div>
        `;

        const imgEl = document.getElementById("trivia-img");
        const feedbackEl = document.getElementById("trivia-feedback");
        const optBtns = container.querySelectorAll(".trivia-opt-btn");

        optBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const selected = parseInt(btn.getAttribute("data-index"));
                imgEl.classList.add("revealed");
                optBtns.forEach(b => b.disabled = true);

                if (selected === q.correct) {
                    btn.classList.add("correct");
                    feedbackEl.style.color = "#2ecc71";
                    feedbackEl.textContent = "You remembered it! ❤️";
                    if (typeof confetti === "function") confetti({ particleCount: 50, spread: 50 });
                } else {
                    btn.classList.add("incorrect");
                    optBtns[q.correct].classList.add("correct");
                    feedbackEl.style.color = "#e74c3c";
                    feedbackEl.textContent = "Not quite! Try another one.";
                }

                setTimeout(() => {
                    currentQ++;
                    loadQuestion();
                }, 2000);
            });
        });
    }

    loadQuestion();
}

// Love Letter Typing Animation
function setupLoveLetter() {
    const contentEl = document.getElementById("letter-content");
    const replayBtn = document.getElementById("replay-letter-btn");
    if (!contentEl) return;

    function typeLetter() {
        contentEl.textContent = "";
        let i = 0;
        const speed = 25;

        function typing() {
            if (i < loveLetterText.length) {
                contentEl.textContent += loveLetterText.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    replayBtn.addEventListener("click", typeLetter);
    typeLetter();
}

// Hidden Surprises Widget
function setupSurprises() {
    const chips = document.querySelectorAll(".surprise-chip");
    const popup = document.getElementById("surprise-popup");
    const textEl = document.getElementById("surprise-text");
    const closeBtn = document.getElementById("close-surprise");
    if (!popup) return;

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            textEl.textContent = chip.getAttribute("data-msg");
            popup.style.display = "block";
            if (typeof confetti === "function") confetti({ particleCount: 40, spread: 40 });
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
}

// Final Surprise Section
function setupFinalSurprise() {
    const btn = document.getElementById("final-surprise-btn");
    const revealBox = document.getElementById("final-reveal-box");
    if (!btn) return;

    btn.addEventListener("click", () => {
        btn.style.display = "none";
        revealBox.style.display = "block";
        if (typeof confetti === "function") {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.5 },
                colors: ['#ff4d6d', '#ff758c', '#ffffff', '#ffd700']
            });
        }
        window.scrollTo({
            top: revealBox.offsetTop - 100,
            behavior: "smooth"
        });
    });
}
