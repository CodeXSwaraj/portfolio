// Project data with detailed information
const projects = {
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

// Optimized channel switching function
function changeChannel(channelNum) {
    const channels = document.querySelectorAll('.channel-content');
    channels.forEach(channel => channel.classList.remove('active'));
    
    document.getElementById(`channel${channelNum}`).classList.add('active');
    document.getElementById('current-channel').textContent = channelNum.toString().padStart(2, '0');
    
    const buttons = document.querySelectorAll('.channel-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[channelNum - 1].classList.add('active');
    
    const screen = document.querySelector('.screen');
    screen.style.opacity = '0.8';
    setTimeout(() => screen.style.opacity = '1', 100);
    
    playSound('click');
}

function playSound(type) {
    if (type === 'click') {
        const click = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
        click.volume = 0.3;
        click.play().catch(e => console.log('Audio play failed:', e));
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
    
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <p class="date">${project.date}</p>
        
        ${teamInfo}
        ${supervisorInfo}
        ${certificationInfo}
        
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
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'flex';
    playSound('click');
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.getElementById('certificateModal').style.display = 'none';
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
            const screen = document.querySelector('.screen');
            screen.style.opacity = '0.95';
            setTimeout(() => {
                screen.style.opacity = '1';
            }, 50);
        }
    }, 5000);
    
    // Close modal when clicking outside content
    window.onclick = function(event) {
        const modals = ['projectModal', 'certificateModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (event.target == modal) {
                closeModal();
            }
        });
    }
}); 