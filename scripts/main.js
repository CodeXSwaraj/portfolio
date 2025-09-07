// Project data with detailed information
const projects = {
    'vision-ai-research': {
        title: "Vision AI: An Interactive Perception System",
        summary: "A comprehensive research paper published in IRJET (International Research Journal of Engineering and Technology) presenting a novel approach to interactive perception by seamlessly integrating real-time object recognition with natural language processing on compact, low-resource platforms like the Raspberry Pi. The paper details complete system architecture, implementation choices, experimental evaluations, challenges, and ethical considerations.",
        results: [
            "Published in IRJET Volume 12, Issue 5 (May 2025)",
            "Achieved 91% mAP (mean Average Precision) in object detection",
            "Demonstrated 15% WER (Word Error Rate) in controlled speech recognition settings",
            "Achieved practical response times averaging 5.11 seconds on Raspberry Pi",
            "Successfully integrated real-time video analysis with voice-driven queries",
            "Validated feasibility of sophisticated AI on edge devices",
            "Addressed privacy concerns through local processing approach"
        ],
        technologies: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi", "NLP", "Computer Vision", "Edge Computing"],
        links: [
            {text: "View Research Paper", url: "https://www.irjet.net/archives/V12/i5/IRJET-V12I584.pdf"}
        ],
        date: "May 2025",
        team: "Bhaumik Shyam Birje, Swaraj Prakash Patil, Hardik Ganesh Patil, Atharva Bhimrao Sawant",
        supervisor: "Dr. Anil S. Londhe, Dr. Sanjay M. Patil",
        publication: "IRJET - International Research Journal of Engineering and Technology"
    },
    'writers-copilot': {
        title: "Writer's Co-Pilot",
        summary: "An advanced AI-powered writing assistant that provides real-time suggestions for improving writing quality, style, and clarity. The system uses advanced NLP techniques to understand context and provide relevant recommendations. Developed as part of academic coursework at Datta Meghe College of Engineering.",
        results: [
            "Reduced writing time by 30% for test users",
            "Improved grammar accuracy by 28% compared to basic spellcheckers",
            "Implemented style adaptation for different writing genres",
            "Featured in 2024 AI Tools Summit as an emerging writing technology",
            "Provides both creative and grammatical suggestions in real-time"
        ],
        technologies: ["Python", "NLTK", "spaCy", "Transformers", "FastAPI", "Supabase"],
        links: [
            {text: "View Project Report", url: "#"}
        ],
        date: "March 2025",
        team: "Bhaumik Birje, Karthik Nair, Swaraj Patil, Atharva Sawant",
        supervisor: "Dr. Sanjay M. Patil"
    },
    'vision-ai': {
        title: "Vision AI - Interactive Perception System",
        summary: "An innovative system combining real-time object recognition with natural language processing to build a voice-controlled interface. Based on Raspberry Pi, it provides low-cost but powerful capabilities for object recognition and voice command processing in the user's surrounding environment.",
        results: [
            "Achieved 92.7% accuracy in real-time object detection",
            "Reduced model size by 40% through quantization techniques",
            "Implemented contextual information layer that improved user understanding by 35%",
            "Successfully deployed in retail and healthcare pilot programs",
            "Demonstrated feasibility of integrated audio-visual processing on edge devices"
        ],
        technologies: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi", "Speech Recognition", "NLP"],
        links: [
            {text: "View Project Report", url: "#"}
        ],
        date: "October 2024",
        team: "Bhaumik Birje, Hardik Patil, Swaraj Patil, Atharva Sawant",
        supervisor: "Dr. S. M. Patil"
    },
    'dynamic-route': {
        title: "Dynamic Route Optimization",
        summary: "A dynamic route optimization system developed for the LOGIthon hackathon, focusing on optimizing international trade routes. The system analyzes various parameters to suggest the most efficient routes for logistics operations.",
        results: [
            "Reduced estimated travel time by 15-20% on test routes",
            "Integrated real-time traffic and weather data",
            "Implemented multi-objective optimization for cost and time",
            "Received special recognition at LOGIthon hackathon"
        ],
        technologies: ["Python", "Django", "Google Maps API", "MySQL"],
        links: [],
        date: "Hackathon Project",
        team: "Swaraj Patil et al."
    },
    'colorization': {
        title: "AI-Powered Image/Video Colorization",
        summary: "CNN-based system for automatic colorization of grayscale images and videos. The project explores different deep learning frameworks for colorization tasks and compares their performance.",
        results: [
            "Successfully colorized historical images with 85% accuracy",
            "Compared performance across TensorFlow, PyTorch, MXNet and Caffe",
            "Implemented post-processing techniques to enhance output quality",
            "Developed user-friendly GUI for easy interaction"
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Keras", "Tkinter"],
        links: [],
        date: "Academic Project",
        team: "Swaraj Patil et al."
    },
    'database-integration': {
        title: "Database Integration Systems",
        summary: "Projects utilizing MySQL, SQLite & MongoDB with Python for efficient data management and retrieval. Developed as part of Udemy certification course on database integration.",
        results: [
            "Implemented CRUD operations across different database systems",
            "Developed efficient data retrieval algorithms",
            "Created data migration tools between different database types",
            "Achieved certification with distinction"
        ],
        technologies: ["Python", "MySQL", "SQLite", "MongoDB", "Flask"],
        links: [],
        date: "August 2024",
        certification: "Databases with Python: MySQL, SQLite & MongoDB (Udemy)"
    },
    'retro-portfolio': {
        title: "Retro TV Portfolio",
        summary: "This interactive retro TV-themed portfolio showcasing my projects and skills with animated effects and channel navigation. Designed to stand out from traditional portfolios with its unique cyberpunk aesthetic.",
        results: [
            "Created fully responsive design",
            "Implemented interactive channel switching",
            "Developed animated CRT TV effects",
            "Integrated detailed project modals"
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        links: [],
        date: "Personal Project"
    }
};

// Enhanced channel switching function with TV effects
function changeChannel(channelNum) {
    console.log('Changing to channel:', channelNum);
    const channels = document.querySelectorAll('.channel-content');
    channels.forEach(channel => channel.classList.remove('active'));
    
    // Create channel switching effect
    const screen = document.querySelector('.tv-screen');
    const switchEffect = document.createElement('div');
    switchEffect.className = 'channel-switch';
    screen.appendChild(switchEffect);
    
    // Remove effect after animation
    setTimeout(() => {
        if (switchEffect.parentNode) {
            switchEffect.parentNode.removeChild(switchEffect);
        }
    }, 600);
    
    // Channel transition with TV static effect
    screen.style.opacity = '0.3';
    screen.style.filter = 'blur(2px)';
    
    setTimeout(() => {
        document.getElementById(`channel${channelNum}`).classList.add('active');
        document.getElementById('current-channel').textContent = channelNum.toString().padStart(2, '0');
        
        const buttons = document.querySelectorAll('.channel-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[channelNum - 1].classList.add('active');
        
        screen.style.opacity = '1';
        screen.style.filter = 'blur(0)';
    }, 200);
    
    playSound('channel');
    addScreenFlicker();
}

// Add random screen flicker effect
function addScreenFlicker() {
    const screen = document.querySelector('.tv-screen');
    const flickerIntensity = Math.random() * 0.1 + 0.05;
    screen.style.opacity = 1 - flickerIntensity;
    setTimeout(() => {
        screen.style.opacity = 1;
    }, Math.random() * 100 + 50);
}

function playSound(type) {
    // Simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Different frequencies for different sound types
        let frequency = 800; // default
        if (type === 'channel') {
            frequency = 600; // lower pitch for channel change
        } else if (type === 'click') {
            frequency = 1000; // higher pitch for clicks
        }
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.005, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Fallback: just log that sound was attempted
        console.log('Sound effect attempted');
    }
}

function showProjectDetails(projectId) {
    const project = projects[projectId];
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('projectModalContent');
    
    let techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    let resultItems = project.results.map(result => 
        `<li>${result}</li>`
    ).join('');
    
    let projectLinks = project.links.map(link => 
        `<a href="${link.url}" class="project-link" target="_blank">${link.text}</a>`
    ).join('');
    
    let teamInfo = project.team ? 
        `<p><strong>Team:</strong> ${project.team}</p>` : '';
    
    let supervisorInfo = project.supervisor ? 
        `<p><strong>Supervisor:</strong> ${project.supervisor}</p>` : '';
    
    let certificationInfo = project.certification ? 
        `<p><strong>Certification:</strong> ${project.certification}</p>` : '';
    
    let publicationInfo = project.publication ? 
        `<p><strong>Publication:</strong> ${project.publication}</p>` : '';
    
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <p class="date">${project.date}</p>
        
        ${teamInfo}
        ${supervisorInfo}
        ${certificationInfo}
        ${publicationInfo}
        
        <div class="project-details">
            <div class="project-summary">
                <h3>Project Summary</h3>
                <p>${project.summary}</p>
            </div>
            <div class="project-results">
                <h3>Key Results</h3>
                <ul>${resultItems}</ul>
            </div>
        </div>
        
        <div class="project-technologies">
            <h3>Technologies Used:</h3>
            ${techTags}
        </div>
        
        ${projectLinks ? `<div class="project-links"><h3>Links:</h3>${projectLinks}</div>` : ''}
    `;
    
    modal.style.display = 'flex';
    playSound('click');
}

function showCertificate(certType) {
    const modal = document.getElementById('certificateModal');
    const modalContent = document.getElementById('certificateModalContent');
    
    let content = '';
    switch(certType) {
        case 'Databases':
            content = `
                <h2>Databases with Python: MySQL, SQLite & MongoDB</h2>
                <p>Udemy Certificate of Completion</p>
                <p>Instructors: SDE Arts by Ahmed El Mohandes</p>
                <p>Completed: August 27, 2024</p>
                <p>Duration: 3 hours</p>
            `;
            break;
        case 'Python':
            content = `
                <h2>Python Development & Data Science</h2>
                <p>Udemy Certificate of Completion</p>
                <p>Instructors: MTF Institute</p>
                <p>Completed: July 31, 2024</p>
                <p>Duration: 1.5 hours</p>
            `;
            break;
        case 'HTML':
            content = `
                <h2>HTML - The Complete Guide to HTML for Beginners</h2>
                <p>Udemy Certificate of Completion</p>
                <p>Instructors: Sara Academy</p>
                <p>Completed: July 25, 2024</p>
                <p>Duration: 2 hours</p>
            `;
            break;
        case 'Git':
            content = `
                <h2>Git & GitHub Bootcamp</h2>
                <p>LetsUpgrade Certificate</p>
                <p>5-day intensive bootcamp</p>
                <p>Completed: September 2-6, 2024</p>
                <p>In collaboration with NSDC</p>
            `;
            break;
        case 'JavaScript':
            content = `
                <h2>JavaScript Bootcamp</h2>
                <p>LetsUpgrade Certificate</p>
                <p>5-day intensive bootcamp</p>
                <p>Completed: September 10-14, 2024</p>
                <p>In collaboration with NSDC</p>
            `;
            break;
        case 'CSharp':
            content = `
                <h2>C# for Beginners</h2>
                <p>Udemy Certificate of Completion</p>
                <p>Instructors: Frank Anemaet</p>
                <p>Completed: April 21, 2025</p>
                <p>Duration: 2 hours</p>
            `;
            break;
        case 'PHP':
            content = `
                <h2>PHP Master Class</h2>
                <p>Udemy Certificate of Completion</p>
                <p>Instructors: Sara Academy</p>
                <p>Completed: March 5, 2025</p>
                <p>Duration: 3.5 hours</p>
            `;
            break;
        case 'OracleDataScience':
            content = `
                <h2>Oracle Cloud Infrastructure 2025 Certified Data Science Professional</h2>
                <p>Oracle Certification</p>
                <p>Issued: September 2, 2025</p>
                <p>Expires: September 2, 2027</p>
                <p><strong>Skills Validated:</strong></p>
                <ul>
                    <li>Identify OCI services to implement ML solutions for business use cases</li>
                    <li>Apply OCI Data & AI services to create ML solutions</li>
                    <li>Incorporate ML and cloud best practices</li>
                    <li>Use OCI Data Science to design and build ML models</li>
                    <li>Train and optimize ML models</li>
                    <li>Deploy and maintain ML models</li>
                </ul>
                <div class="links">
                    <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=BC548CA323A1052ADEA03886F2529501E1EC25AD6B456EEF00F7FA291A20395D" target="_blank">View Badge</a>
                </div>
            `;
            break;
        case 'OracleDatabase':
            content = `
                <h2>Oracle Cloud Database Services 2025 Certified Professional</h2>
                <p>Oracle Certification</p>
                <p>Issued: September 3, 2025</p>
                <p>Expires: September 3, 2027</p>
                <p><strong>Skills Validated:</strong></p>
                <ul>
                    <li>Implement Oracle Cloud Database Services on OCI platform</li>
                    <li>Configure and monitor Oracle Base Database services</li>
                    <li>Deploy Exadata DBs, manage MySQL Database and HeatWave</li>
                    <li>Understand NoSQL Database Cloud Service requirements</li>
                    <li>Describe Oracle Cloud Infrastructure Database Management service</li>
                </ul>
                <div class="links">
                    <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=0252B4979CAB80075C0475351B5EA2F5E189DA627CF6572A1A1E2D44ECD0BAE2" target="_blank">View Badge</a>
                </div>
            `;
            break;
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'flex';
    playSound('click');
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.getElementById('certificateModal').style.display = 'none';
    document.getElementById('gameModal').style.display = 'none';
    playSound('click');
}

// Game difficulty levels
const gameDifficulties = {
    beginner: { speed: 200, label: 'Beginner' },
    medium: { speed: 150, label: 'Medium' },
    hard: { speed: 100, label: 'Hard' }
};

// Current game difficulty
let currentDifficulty = 'medium';

// Game functions
function startGame(gameType) {
    const modal = document.getElementById('gameModal');
    const modalContent = document.getElementById('gameModalContent');
    
    let gameHTML = '';
    
    switch(gameType) {
        case 'snake':
            gameHTML = `
                <div class="game-area">
                    <h2>🐍 Snake Game</h2>
                    <div class="game-score">Score: <span id="snakeScore">0</span> | Level: <span id="snakeLevel">${gameDifficulties[currentDifficulty].label}</span></div>
                    <div class="game-instructions">Use arrow keys to control the snake. Eat the food to grow!</div>
                    <div class="difficulty-selector">
                        <label>Difficulty: </label>
                        <select id="snakeDifficulty" onchange="changeSnakeDifficulty(this.value)">
                            <option value="beginner" ${currentDifficulty === 'beginner' ? 'selected' : ''}>Beginner</option>
                            <option value="medium" ${currentDifficulty === 'medium' ? 'selected' : ''}>Medium</option>
                            <option value="hard" ${currentDifficulty === 'hard' ? 'selected' : ''}>Hard</option>
                        </select>
                    </div>
                    <canvas id="snakeCanvas" class="game-canvas" width="400" height="300"></canvas>
                    <div class="game-buttons">
                        <button class="game-btn" onclick="startSnakeGame()">Start Game</button>
                        <button class="game-btn" onclick="pauseSnakeGame()">Pause</button>
                        <button class="game-btn" onclick="resetSnakeGame()">Reset</button>
                    </div>
                </div>
            `;
            break;
        case 'pong':
            gameHTML = `
                <div class="game-area">
                    <h2>🏓 Pong</h2>
                    <div class="game-score">Score: <span id="pongScore">0 - 0</span> | Level: <span id="pongLevel">${gameDifficulties[currentDifficulty].label}</span></div>
                    <div class="game-instructions">W/S for left paddle, ↑/↓ for right paddle</div>
                    <div class="difficulty-selector">
                        <label>Difficulty: </label>
                        <select id="pongDifficulty" onchange="changePongDifficulty(this.value)">
                            <option value="beginner" ${currentDifficulty === 'beginner' ? 'selected' : ''}>Beginner</option>
                            <option value="medium" ${currentDifficulty === 'medium' ? 'selected' : ''}>Medium</option>
                            <option value="hard" ${currentDifficulty === 'hard' ? 'selected' : ''}>Hard</option>
                        </select>
                    </div>
                    <canvas id="pongCanvas" class="game-canvas" width="400" height="300"></canvas>
                    <div class="game-buttons">
                        <button class="game-btn" onclick="startPongGame()">Start Game</button>
                        <button class="game-btn" onclick="pausePongGame()">Pause</button>
                        <button class="game-btn" onclick="resetPongGame()">Reset</button>
                    </div>
                </div>
            `;
            break;
        case 'memory':
            gameHTML = `
                <div class="game-area">
                    <h2>🧠 Memory Game</h2>
                    <div class="game-score">Moves: <span id="memoryMoves">0</span> | Matches: <span id="memoryMatches">0</span> | Level: <span id="memoryLevel">${gameDifficulties[currentDifficulty].label}</span></div>
                    <div class="game-instructions">Click cards to flip them. Match pairs to win!</div>
                    <div class="difficulty-selector">
                        <label>Difficulty: </label>
                        <select id="memoryDifficulty" onchange="changeMemoryDifficulty(this.value)">
                            <option value="beginner" ${currentDifficulty === 'beginner' ? 'selected' : ''}>Beginner (4x4)</option>
                            <option value="medium" ${currentDifficulty === 'medium' ? 'selected' : ''}>Medium (4x4)</option>
                            <option value="hard" ${currentDifficulty === 'hard' ? 'selected' : ''}>Hard (6x6)</option>
                        </select>
                    </div>
                    <div id="memoryBoard" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 400px; margin: 20px auto;"></div>
                    <div class="game-buttons">
                        <button class="game-btn" onclick="startMemoryGame()">New Game</button>
                        <button class="game-btn" onclick="resetMemoryGame()">Reset</button>
                    </div>
                </div>
            `;
            break;
        case 'typing':
            gameHTML = `
                <div class="game-area">
                    <h2>⌨️ Typing Test</h2>
                    <div class="game-score">WPM: <span id="typingWPM">0</span> | Accuracy: <span id="typingAccuracy">0%</span> | Level: <span id="typingLevel">${gameDifficulties[currentDifficulty].label}</span></div>
                    <div class="game-instructions">Type the words as fast as you can!</div>
                    <div class="difficulty-selector">
                        <label>Difficulty: </label>
                        <select id="typingDifficulty" onchange="changeTypingDifficulty(this.value)">
                            <option value="beginner" ${currentDifficulty === 'beginner' ? 'selected' : ''}>Beginner (Simple words)</option>
                            <option value="medium" ${currentDifficulty === 'medium' ? 'selected' : ''}>Medium (Mixed words)</option>
                            <option value="hard" ${currentDifficulty === 'hard' ? 'selected' : ''}>Hard (Complex words)</option>
                        </select>
                    </div>
                    <div id="typingText" style="font-size: 1.2rem; color: #00ff00; margin: 20px 0; min-height: 60px; padding: 20px; border: 2px solid #00ff00; border-radius: 10px; background: rgba(0, 255, 0, 0.05);"></div>
                    <input type="text" id="typingInput" style="width: 100%; padding: 10px; font-size: 1rem; background: #000; border: 2px solid #00ff00; color: #00ff00; border-radius: 5px; text-align: center;" placeholder="Start typing...">
                    <div class="game-buttons">
                        <button class="game-btn" onclick="startTypingGame()">Start Test</button>
                        <button class="game-btn" onclick="resetTypingGame()">Reset</button>
                    </div>
                </div>
            `;
            break;
    }
    
    modalContent.innerHTML = gameHTML;
    modal.style.display = 'flex';
    playSound('click');
}

// Simple Snake Game
let snakeGame = null;
let snakeInterval = null;
let snakeDirection = {x: 0, y: 0};
let snake = [{x: 200, y: 150}];
let snakeFood = {x: 100, y: 100};
let snakeScore = 0;
let snakeGameStarted = false;
let snakeKeyHandler = null;

function changeSnakeDifficulty(difficulty) {
    currentDifficulty = difficulty;
    const levelElement = document.getElementById('snakeLevel');
    if (levelElement) {
        levelElement.textContent = gameDifficulties[difficulty].label;
    }
}

function startSnakeGame() {
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('snakeScore');
    
    // Reset game state completely
    snake = [{x: 200, y: 150}];
    snakeDirection = {x: 10, y: 0}; // Start moving right
    snakeFood = {
        x: Math.floor(Math.random() * (canvas.width / 10)) * 10,
        y: Math.floor(Math.random() * (canvas.height / 10)) * 10
    };
    snakeScore = 0;
    snakeGameStarted = true;
    
    if (scoreElement) {
        scoreElement.textContent = snakeScore;
    }
    
    // Clear any existing interval
    if (snakeInterval) {
        clearInterval(snakeInterval);
    }
    
    // Remove existing key handler
    if (snakeKeyHandler) {
        document.removeEventListener('keydown', snakeKeyHandler);
    }
    
    function draw() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw snake
        ctx.fillStyle = '#00ff00';
        snake.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, 10, 10);
        });
        
        // Draw food
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(snakeFood.x, snakeFood.y, 10, 10);
    }
    
    function update() {
        if (!snakeGameStarted) return;
        
        const head = {x: snake[0].x + snakeDirection.x, y: snake[0].y + snakeDirection.y};
        
        // Check collision with walls
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            gameOver();
            return;
        }
        
        // Check collision with self
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            gameOver();
            return;
        }
        
        snake.unshift(head);
        
        // Check food collision
        if (head.x === snakeFood.x && head.y === snakeFood.y) {
            snakeScore += 10;
            if (scoreElement) {
                scoreElement.textContent = snakeScore;
            }
            // Generate new food position
            do {
                snakeFood = {
                    x: Math.floor(Math.random() * (canvas.width / 10)) * 10,
                    y: Math.floor(Math.random() * (canvas.height / 10)) * 10
                };
            } while (snake.some(segment => segment.x === snakeFood.x && segment.y === snakeFood.y));
        } else {
            snake.pop();
        }
        
        draw();
    }
    
    function gameOver() {
        snakeGameStarted = false;
        clearInterval(snakeInterval);
        alert(`Game Over! Final Score: ${snakeScore}`);
    }
    
    // Add keydown listener
    snakeKeyHandler = (e) => {
        if (!snakeGameStarted) return;
        
        if (e.key === 'ArrowUp' && snakeDirection.y === 0) {
            snakeDirection = {x: 0, y: -10};
        } else if (e.key === 'ArrowDown' && snakeDirection.y === 0) {
            snakeDirection = {x: 0, y: 10};
        } else if (e.key === 'ArrowLeft' && snakeDirection.x === 0) {
            snakeDirection = {x: -10, y: 0};
        } else if (e.key === 'ArrowRight' && snakeDirection.x === 0) {
            snakeDirection = {x: 10, y: 0};
        }
    };
    
    document.addEventListener('keydown', snakeKeyHandler);
    
    const speed = gameDifficulties[currentDifficulty].speed;
    snakeInterval = setInterval(update, speed);
    draw();
}

function pauseSnakeGame() {
    if (snakeInterval) {
        clearInterval(snakeInterval);
        snakeInterval = null;
        snakeGameStarted = false;
    } else if (!snakeGameStarted) {
        startSnakeGame();
    }
}

function resetSnakeGame() {
    if (snakeInterval) {
        clearInterval(snakeInterval);
        snakeInterval = null;
    }
    
    // Remove key handler
    if (snakeKeyHandler) {
        document.removeEventListener('keydown', snakeKeyHandler);
        snakeKeyHandler = null;
    }
    
    // Reset game state
    snake = [{x: 200, y: 150}];
    snakeDirection = {x: 0, y: 0};
    snakeScore = 0;
    snakeGameStarted = false;
    
    const scoreElement = document.getElementById('snakeScore');
    if (scoreElement) {
        scoreElement.textContent = '0';
    }
    
    const canvas = document.getElementById('snakeCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

// Simple Memory Game
let memoryCards = [];
let flippedCards = [];
let matches = 0;
let moves = 0;
let memoryGameStarted = false;

function changeMemoryDifficulty(difficulty) {
    currentDifficulty = difficulty;
    const levelElement = document.getElementById('memoryLevel');
    if (levelElement) {
        levelElement.textContent = gameDifficulties[difficulty].label;
    }
}

function startMemoryGame() {
    const symbols = ['🐍', '🏓', '🧠', '⌨️', '💻', '🎮', '🚀', '⭐', '🎯', '🎲', '🎪', '🎨', '🎭', '🎪', '🎨', '🎭', '🎯', '🎲'];
    const board = document.getElementById('memoryBoard');
    board.innerHTML = '';
    
    // Determine grid size based on difficulty
    let gridSize, cardCount;
    if (currentDifficulty === 'hard') {
        gridSize = 6;
        cardCount = 18; // 9 pairs
    } else {
        gridSize = 4;
        cardCount = 8; // 4 pairs
    }
    
    // Update board grid
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    board.style.maxWidth = currentDifficulty === 'hard' ? '600px' : '400px';
    
    // Select symbols based on difficulty
    const selectedSymbols = symbols.slice(0, cardCount / 2);
    memoryCards = [...selectedSymbols, ...selectedSymbols].sort(() => Math.random() - 0.5);
    flippedCards = [];
    matches = 0;
    moves = 0;
    memoryGameStarted = true;
    
    memoryCards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        const cardSize = currentDifficulty === 'hard' ? '60px' : '80px';
        card.style.cssText = `
            width: ${cardSize}; height: ${cardSize}; background: #333; border: 2px solid #00ff00; 
            display: flex; align-items: center; justify-content: center; 
            font-size: ${currentDifficulty === 'hard' ? '1.5rem' : '2rem'}; cursor: pointer; border-radius: 5px;
        `;
        card.dataset.index = index;
        card.dataset.symbol = symbol;
        card.textContent = '?';
        card.onclick = () => flipCard(index);
        board.appendChild(card);
    });
    
    updateMemoryScore();
}

function flipCard(index) {
    const card = document.querySelector(`[data-index="${index}"]`);
    if (flippedCards.length >= 2 || card.textContent !== '?') return;
    
    card.textContent = card.dataset.symbol;
    flippedCards.push({index, symbol: card.dataset.symbol});
    
    if (flippedCards.length === 2) {
        moves++;
        updateMemoryScore();
        
        if (flippedCards[0].symbol === flippedCards[1].symbol) {
            matches++;
            flippedCards.forEach(({index}) => {
                document.querySelector(`[data-index="${index}"]`).style.background = '#00ff00';
            });
            flippedCards = [];
            
            if (matches === memoryCards.length / 2) {
                alert('Congratulations! You won!');
            }
        } else {
            setTimeout(() => {
                flippedCards.forEach(({index}) => {
                    document.querySelector(`[data-index="${index}"]`).textContent = '?';
                });
                flippedCards = [];
            }, 1000);
        }
    }
}

function updateMemoryScore() {
    document.getElementById('memoryMoves').textContent = moves;
    document.getElementById('memoryMatches').textContent = matches;
}

function resetMemoryGame() {
    memoryGameStarted = false;
    memoryCards = [];
    flippedCards = [];
    matches = 0;
    moves = 0;
    
    const board = document.getElementById('memoryBoard');
    if (board) {
        board.innerHTML = '';
    }
    
    updateMemoryScore();
}

// Simple Typing Test
let typingWords = {
    beginner: ['cat', 'dog', 'run', 'jump', 'play', 'game', 'fun', 'happy', 'good', 'nice', 'big', 'small', 'fast', 'slow', 'hot', 'cold'],
    medium: ['portfolio', 'developer', 'javascript', 'python', 'programming', 'computer', 'technology', 'innovation', 'algorithm', 'database', 'framework', 'application', 'interface', 'function', 'variable', 'constant'],
    hard: ['pneumonoultramicroscopicsilicovolcanoconiosis', 'supercalifragilisticexpialidocious', 'antidisestablishmentarianism', 'pseudopseudohypoparathyroidism', 'floccinaucinihilipilification', 'hippopotomonstrosesquippedaliophobia', 'xenotransplantation', 'electroencephalographically', 'immunoelectrophoretically', 'psychophysicotherapeutics', 'thyroparathyroidectomized', 'pneumoencephalographically', 'radioimmunoelectrophoresis', 'psychoneuroendocrinological', 'otorhinolaryngological', 'gastroenterologically']
};
let currentWordIndex = 0;
let startTime = null;
let correctChars = 0;
let totalChars = 0;
let typingGameStarted = false;

function changeTypingDifficulty(difficulty) {
    currentDifficulty = difficulty;
    const levelElement = document.getElementById('typingLevel');
    if (levelElement) {
        levelElement.textContent = gameDifficulties[difficulty].label;
    }
}

function startTypingGame() {
    const textElement = document.getElementById('typingText');
    const inputElement = document.getElementById('typingInput');
    
    currentWordIndex = 0;
    correctChars = 0;
    totalChars = 0;
    startTime = Date.now();
    typingGameStarted = true;
    
    displayWords();
    inputElement.value = '';
    inputElement.focus();
    
    inputElement.oninput = () => {
        if (!typingGameStarted) return;
        
        const input = inputElement.value;
        const currentWord = typingWords[currentDifficulty][currentWordIndex];
        
        if (input === currentWord) {
            correctChars += currentWord.length;
            totalChars += currentWord.length;
            currentWordIndex++;
            inputElement.value = '';
            
            if (currentWordIndex >= typingWords[currentDifficulty].length) {
                endTypingGame();
                return;
            }
            
            displayWords();
        } else {
            totalChars = Math.max(totalChars, input.length);
        }
        
        updateTypingScore();
    };
}

function displayWords() {
    const textElement = document.getElementById('typingText');
    const words = typingWords[currentDifficulty];
    textElement.innerHTML = words.slice(currentWordIndex, currentWordIndex + 3).join(' ');
}

function updateTypingScore() {
    if (startTime) {
        const elapsed = (Date.now() - startTime) / 1000 / 60; // minutes
        const wpm = Math.round(correctChars / 5 / elapsed);
        const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;
        
        document.getElementById('typingWPM').textContent = wpm || 0;
        document.getElementById('typingAccuracy').textContent = accuracy + '%';
    }
}

function endTypingGame() {
    typingGameStarted = false;
    updateTypingScore();
    alert('Typing test completed!');
}

function resetTypingGame() {
    typingGameStarted = false;
    currentWordIndex = 0;
    correctChars = 0;
    totalChars = 0;
    startTime = null;
    
    const textElement = document.getElementById('typingText');
    const inputElement = document.getElementById('typingInput');
    
    if (textElement) {
        textElement.innerHTML = '';
    }
    if (inputElement) {
        inputElement.value = '';
    }
    
    updateTypingScore();
}

// Pong Game
let pongInterval = null;
let pongGame = {
    ball: {x: 200, y: 150, dx: 2, dy: 2},
    leftPaddle: {x: 10, y: 100, dy: 0},
    rightPaddle: {x: 380, y: 100, dy: 0},
    leftScore: 0,
    rightScore: 0,
    paused: false
};
let pongGameStarted = false;
let pongKeyHandler = null;
let pongKeyUpHandler = null;

function changePongDifficulty(difficulty) {
    currentDifficulty = difficulty;
    const levelElement = document.getElementById('pongLevel');
    if (levelElement) {
        levelElement.textContent = gameDifficulties[difficulty].label;
    }
}

function startPongGame() {
    const canvas = document.getElementById('pongCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('pongScore');
    
    // Get ball speed based on difficulty
    let ballSpeed;
    switch(currentDifficulty) {
        case 'beginner': ballSpeed = 1; break;
        case 'medium': ballSpeed = 2; break;
        case 'hard': ballSpeed = 3; break;
        default: ballSpeed = 2;
    }
    
    // Reset game state
    pongGame = {
        ball: {x: 200, y: 150, dx: ballSpeed, dy: ballSpeed},
        leftPaddle: {x: 10, y: 100, dy: 0},
        rightPaddle: {x: 380, y: 100, dy: 0},
        leftScore: 0,
        rightScore: 0,
        paused: false
    };
    pongGameStarted = true;
    
    if (scoreElement) {
        scoreElement.textContent = '0 - 0';
    }
    
    // Clear any existing interval
    if (pongInterval) {
        clearInterval(pongInterval);
    }
    
    // Remove existing key handlers
    if (pongKeyHandler) {
        document.removeEventListener('keydown', pongKeyHandler);
    }
    if (pongKeyUpHandler) {
        document.removeEventListener('keyup', pongKeyUpHandler);
    }
    
    function draw() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw paddles
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(pongGame.leftPaddle.x, pongGame.leftPaddle.y, 10, 60);
        ctx.fillRect(pongGame.rightPaddle.x, pongGame.rightPaddle.y, 10, 60);
        
        // Draw ball
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(pongGame.ball.x, pongGame.ball.y, 10, 10);
        
        // Draw center line
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#00ff00';
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    function update() {
        if (pongGame.paused || !pongGameStarted) return;
        
        // Move ball
        pongGame.ball.x += pongGame.ball.dx;
        pongGame.ball.y += pongGame.ball.dy;
        
        // Ball collision with top/bottom walls
        if (pongGame.ball.y <= 0 || pongGame.ball.y >= canvas.height - 10) {
            pongGame.ball.dy = -pongGame.ball.dy;
        }
        
        // Ball collision with paddles
        if (pongGame.ball.x <= pongGame.leftPaddle.x + 10 && 
            pongGame.ball.y >= pongGame.leftPaddle.y && 
            pongGame.ball.y <= pongGame.leftPaddle.y + 60) {
            pongGame.ball.dx = -pongGame.ball.dx;
        }
        
        if (pongGame.ball.x >= pongGame.rightPaddle.x - 10 && 
            pongGame.ball.y >= pongGame.rightPaddle.y && 
            pongGame.ball.y <= pongGame.rightPaddle.y + 60) {
            pongGame.ball.dx = -pongGame.ball.dx;
        }
        
        // Ball out of bounds - scoring
        if (pongGame.ball.x < 0) {
            pongGame.rightScore++;
            resetBall();
        } else if (pongGame.ball.x > canvas.width) {
            pongGame.leftScore++;
            resetBall();
        }
        
        // Move paddles
        pongGame.leftPaddle.y += pongGame.leftPaddle.dy;
        pongGame.rightPaddle.y += pongGame.rightPaddle.dy;
        
        // Keep paddles in bounds
        if (pongGame.leftPaddle.y < 0) pongGame.leftPaddle.y = 0;
        if (pongGame.leftPaddle.y > canvas.height - 60) pongGame.leftPaddle.y = canvas.height - 60;
        if (pongGame.rightPaddle.y < 0) pongGame.rightPaddle.y = 0;
        if (pongGame.rightPaddle.y > canvas.height - 60) pongGame.rightPaddle.y = canvas.height - 60;
        
        // Update score display
        if (scoreElement) {
            scoreElement.textContent = `${pongGame.leftScore} - ${pongGame.rightScore}`;
        }
        
        draw();
    }
    
    function resetBall() {
        pongGame.ball.x = canvas.width / 2;
        pongGame.ball.y = canvas.height / 2;
        pongGame.ball.dx = (Math.random() > 0.5 ? 1 : -1) * ballSpeed;
        pongGame.ball.dy = (Math.random() > 0.5 ? 1 : -1) * ballSpeed;
    }
    
    // Add keydown listener
    pongKeyHandler = (e) => {
        if (!pongGameStarted) return;
        
        if (e.key === 'w' || e.key === 'W') {
            pongGame.leftPaddle.dy = -3;
        } else if (e.key === 's' || e.key === 'S') {
            pongGame.leftPaddle.dy = 3;
        } else if (e.key === 'ArrowUp') {
            pongGame.rightPaddle.dy = -3;
        } else if (e.key === 'ArrowDown') {
            pongGame.rightPaddle.dy = 3;
        }
    };
    
    pongKeyUpHandler = (e) => {
        if (!pongGameStarted) return;
        
        if (e.key === 'w' || e.key === 'W' || e.key === 's' || e.key === 'S') {
            pongGame.leftPaddle.dy = 0;
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            pongGame.rightPaddle.dy = 0;
        }
    };
    
    document.addEventListener('keydown', pongKeyHandler);
    document.addEventListener('keyup', pongKeyUpHandler);
    
    pongInterval = setInterval(update, 16);
    draw();
}

function pausePongGame() {
    if (pongInterval) {
        clearInterval(pongInterval);
        pongInterval = null;
        pongGame.paused = true;
        pongGameStarted = false;
    } else if (!pongGameStarted) {
        pongGame.paused = false;
        startPongGame();
    }
}

function resetPongGame() {
    if (pongInterval) {
        clearInterval(pongInterval);
        pongInterval = null;
    }
    
    // Remove key handlers
    if (pongKeyHandler) {
        document.removeEventListener('keydown', pongKeyHandler);
        pongKeyHandler = null;
    }
    if (pongKeyUpHandler) {
        document.removeEventListener('keyup', pongKeyUpHandler);
        pongKeyUpHandler = null;
    }
    
    // Reset game state
    pongGame = {
        ball: {x: 200, y: 150, dx: 2, dy: 2},
        leftPaddle: {x: 10, y: 100, dy: 0},
        rightPaddle: {x: 380, y: 100, dy: 0},
        leftScore: 0,
        rightScore: 0,
        paused: false
    };
    pongGameStarted = false;
    
    const scoreElement = document.getElementById('pongScore');
    if (scoreElement) {
        scoreElement.textContent = '0 - 0';
    }
    
    const canvas = document.getElementById('pongCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

// TV Control Functions
function adjustBrightness() {
    const screen = document.querySelector('.tv-screen');
    const currentBrightness = screen.style.filter || 'brightness(1)';
    const brightness = currentBrightness.includes('brightness') ? 
        parseFloat(currentBrightness.match(/brightness\(([^)]+)\)/)[1]) : 1;
    
    const newBrightness = brightness === 1 ? 0.7 : brightness === 0.7 ? 0.4 : 1;
    screen.style.filter = `brightness(${newBrightness})`;
    
    playSound('click');
}

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('bootSequence').style.display = 'none';
    }, 3000);
    
    document.addEventListener('keydown', function(e) {
        if (e.key >= '1' && e.key <= '5') {
            changeChannel(parseInt(e.key));
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Add periodic screen flicker
    setInterval(() => {
        if (Math.random() < 0.05) {
            const screen = document.querySelector('.tv-screen');
            screen.style.opacity = '0.95';
            setTimeout(() => {
                screen.style.opacity = '1';
            }, 50);
        }
    }, 5000);
    
    // Close modal when clicking outside content
    window.onclick = function(event) {
        const modals = ['projectModal', 'certificateModal', 'gameModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (event.target == modal) {
                closeModal();
            }
        });
    }
}); 