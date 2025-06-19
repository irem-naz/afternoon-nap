// Character data for modal
const characterData = {
    lili: {
        emoji: '👧',
        name: 'Lili',
        description: 'A young girl whose life is turned upside down when her beloved dog Hagen is taken away. Her journey represents innocence lost and the fight for what we love.',
        character: 'Protagonist',
        role: 'Young girl',
        actor: 'Zsófia Psotta',
        significance: 'Central to the story\'s emotional core',
        background: 'modal-lili'
    },
    hagen: {
        emoji: '🐕',
        name: 'Hagen',
        description: 'Lili\'s loyal dog who becomes the symbol of the oppressed. His transformation from pet to leader of a canine revolution drives the film\'s powerful allegory.',
        character: 'Deuteragonist',
        role: 'Beloved dog',
        actor: 'Trained canine actors',
        significance: 'Symbol of loyalty and rebellion',
        background: 'modal-hagen'
    },
    daniel: {
        emoji: '👨',
        name: 'Dániel',
        description: 'Lili\'s father who makes difficult decisions that set the story in motion. His character represents the adult world\'s harsh realities and compromises.',
        character: 'Supporting',
        role: 'Father figure',
        actor: 'Sándor Zsótér',
        significance: 'Catalyst for the main conflict',
        background: 'modal-daniel'
    },
    society: {
        emoji: '🎭',
        name: 'Society',
        description: 'The collective antagonist representing prejudice, bureaucracy, and systemic oppression. A powerful metaphor for how society treats the different and vulnerable.',
        character: 'Antagonist',
        role: 'Collective force',
        actor: 'Various actors',
        significance: 'Represents societal prejudice',
        background: 'modal-society'
    }
};

// Modal functions
function openModal(characterKey) {
    const character = characterData[characterKey];
    const modal = document.getElementById('characterModal');
    const characterSection = document.getElementById('modalCharacterSection');
    
    // Update modal content
    document.getElementById('modalCharacterLarge').textContent = character.emoji;
    document.getElementById('modalCharacterName').textContent = character.name;
    document.getElementById('modalDescription').textContent = character.description;
    document.getElementById('modalDetailCharacter').textContent = character.character;
    document.getElementById('modalDetailRole').textContent = character.role;
    document.getElementById('modalDetailActor').textContent = character.actor;
    document.getElementById('modalDetailSignificance').textContent = character.significance;
    
    // Update background
    characterSection.className = `modal-character-section ${character.background}`;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-close')) {
        return;
    }
    
    const modal = document.getElementById('characterModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Rating functions
function updateRating(value) {
    const section = document.getElementById('ratingSection');
    const text = document.getElementById('ratingText');
    
    // Remove all rating classes
    section.classList.remove('rating-bad', 'rating-normal', 'rating-good');
    
    if (value <= 33) {
        section.classList.add('rating-bad');
        text.textContent = 'BAD';
    } else if (value <= 66) {
        section.classList.add('rating-normal');
        text.textContent = 'NORMAL';
    } else {
        section.classList.add('rating-good');
        text.textContent = 'GOOD';
    }
}

function submitRating() {
    const slider = document.getElementById('ratingSlider');
    const rating = slider.value;
    let ratingText = '';
    
    if (rating <= 33) {
        ratingText = 'Bad';
    } else if (rating <= 66) {
        ratingText = 'Normal';
    } else {
        ratingText = 'Good';
    }
    
    // Create confetti
    createConfetti();
    
    // Show thank you message
    showThankYouMessage();
    
    // Optional: Log the rating (replace alert)
    console.log(`User rated White God as ${ratingText} (${rating}/100)`);
}

function createConfetti() {
    const colors = ['#ff3333', '#00bfff', '#00ff44', '#ffcc00', '#cc44ff', '#ff6600', '#ff1493', '#00ff88'];
    const confettiCount = 60;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-50px';
            confetti.style.width = '35px';
            confetti.style.height = '35px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
            
            const duration = (Math.random() * 2 + 2) + 's';
            confetti.style.animation = `confettiFall ${duration} ease-out forwards`;
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 40);
    }
}

function showThankYouMessage() {
    const message = document.getElementById('thankYouMessage');
    message.classList.add('show');
    
    // Hide message after 4 seconds
    setTimeout(() => {
        message.classList.remove('show');
    }, 4000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactive video player
    initializeInteractiveVideo();
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Scroll to film section when Netflix Watch button is clicked
    var watchBtn = document.getElementById('watchBtnNetflix');
    if (watchBtn) {
        watchBtn.addEventListener('click', function() {
            var filmSection = document.getElementById('film');
            if (filmSection) {
                filmSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Replace default anchor scroll with offset scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const OFFSET = 80;
                    window.scrollTo({
                        top: target.offsetTop - OFFSET,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// YouTube video IDs for each branch with approximate durations (in seconds)
const YOUTUBE_IDS = {
    '1': 'Ue-5AZW6b30',
    '2': 'ysCBlvdt0vo',
    '3': 'p3rQxfnS2Lk',
    '4': 'QhK4EHCOcsE'
};

// Approximate video durations in seconds (you may need to adjust these)
const VIDEO_DURATIONS = {
    '1': 30, // Adjust based on actual video length
    '2': 25, // Adjust based on actual video length
    '3': 28, // Adjust based on actual video length
    '4': 35  // Adjust based on actual video length
};

// Helper to set YouTube iframe src
function setVideoSource(iframe, videoId) {
    currentVideoId = videoId;
    
    // Clear any existing timer
    if (window.videoEndTimer) {
        clearTimeout(window.videoEndTimer);
    }
    
    if (youtubePlayer && youtubePlayer.loadVideoById) {
        // Use YouTube API if available
        youtubePlayer.loadVideoById(videoId);
    } else {
        // Fallback to changing iframe src directly
        iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1`;
    }
    
    // Set fallback timer for video end detection
    const duration = VIDEO_DURATIONS[videoId] || 30;
    window.videoEndTimer = setTimeout(() => {
        console.log('Fallback timer triggered for video:', videoId);
        onVideoEnded();
    }, (duration + 2) * 1000); // Add 2 seconds buffer
}

// --- Refactored Interactive Video Player Logic for YouTube ---
let currentBranch = null;
let storyState = 'initial'; // 'initial', 'choice', 'final', 'complete', 'waitTextHer'
let storyHistory = [];
let textHerTimeout = null;
let youtubePlayer = null;
let currentVideoId = null;
let apiReady = false;

function initializeInteractiveVideo() {
    const iframe = document.getElementById('storyVideo');
    const choiceArea = document.getElementById('choiceArea');
    const restartSection = document.getElementById('restartSection');
    const backButton = document.getElementById('backButton');
    const videoTitle = document.getElementById('videoTitle');
    choiceArea.style.display = 'none';
    restartSection.style.display = 'none';
    backButton.style.display = 'none';
    videoTitle.textContent = 'Interactive Story Experience';
    storyState = 'initial';
    storyHistory = [];
    currentBranch = null;
    // Setup YouTube API event listeners
    setupYouTubeEvents();
    // Set initial video after a short delay to ensure API is ready
    setTimeout(() => {
        setVideoSource(iframe, YOUTUBE_IDS['1']);
    }, 1000);
}

function setupYouTubeEvents() {
    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = createYouTubePlayer;
    } else {
        createYouTubePlayer();
    }
}

function createYouTubePlayer() {
    if (youtubePlayer) {
        youtubePlayer.destroy();
    }
    youtubePlayer = new YT.Player('storyVideo', {
        videoId: YOUTUBE_IDS['1'],
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onYouTubePlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    apiReady = true;
    console.log('YouTube API ready');
}

function onYouTubePlayerStateChange(event) {
    // 0 = ended
    if (event.data === YT.PlayerState.ENDED) {
        console.log('Video ended, current video ID:', currentVideoId);
        onVideoEnded();
    }
}

function onVideoEnded() {
    if (storyState === 'initial') {
        showChoiceArea();
    } else if (storyState === 'final') {
        if (currentBranch === 'text' && currentVideoId === YOUTUBE_IDS['3']) {
            playFinalBranchVideo();
        } else if (currentBranch === 'clean' && currentVideoId === YOUTUBE_IDS['2']) {
            playFinalBranchVideo();
        } else if (currentVideoId === YOUTUBE_IDS['4']) {
            showRestartButton();
        }
    } else if (storyState === 'waitTextHer') {
        // Do nothing, wait for button
    }
}

function showChoiceArea() {
    const choiceArea = document.getElementById('choiceArea');
    const backButton = document.getElementById('backButton');
    const videoTitle = document.getElementById('videoTitle');
    choiceArea.innerHTML = `
        <div class="choice-content-overlay">
            <h3 class="choice-title">What would you do?</h3>
            <div class="choice-options">
                <button id="choice1" class="choice-btn" onclick="makeChoice('text')">
                    <span class="choice-text">Text Her</span>
                </button>
                <button id="choice2" class="choice-btn" onclick="makeChoice('clean')">
                    <span class="choice-text">Clean It Yourself</span>
                </button>
            </div>
        </div>
    `;
    choiceArea.style.display = 'block';
    backButton.style.display = 'block';
    videoTitle.textContent = 'What would you do?';
    storyState = 'choice';
    // Do not push to history here, let makeChoice handle it
}

function makeChoice(choice) {
    const iframe = document.getElementById('storyVideo');
    const choiceArea = document.getElementById('choiceArea');
    const backButton = document.getElementById('backButton');
    const videoTitle = document.getElementById('videoTitle');
    choiceArea.style.display = 'none';
    backButton.style.display = 'block';
    storyState = 'final';
    storyHistory.push('final');
    currentBranch = choice;
    // Set video source for branch
    if (choice === 'text') {
        setVideoSource(iframe, YOUTUBE_IDS['3']);
    } else if (choice === 'clean') {
        setVideoSource(iframe, YOUTUBE_IDS['2']);
    }
    videoTitle.textContent = 'The story continues...';
    // Wait for video to end (handled by YouTube event)
}

function playFinalBranchVideo() {
    const iframe = document.getElementById('storyVideo');
    const videoTitle = document.getElementById('videoTitle');
    setVideoSource(iframe, YOUTUBE_IDS['4']);
    videoTitle.textContent = 'The story continues...';
    storyState = 'final';
    // Wait for video to end (handled by YouTube event)
}

function showTextHerButtonBeforeFinal() {
    const iframe = document.getElementById('storyVideo');
    const videoTitle = document.getElementById('videoTitle');
    const choiceArea = document.getElementById('choiceArea');
    const backButton = document.getElementById('backButton');
    choiceArea.innerHTML = `
        <div class="choice-content-overlay">
            <h3 class="choice-title">What would you do next?</h3>
            <div class="choice-options">
                <button id="textHerFinalBtn" class="choice-btn" tabindex="0"><span class="choice-text">Text Her</span></button>
                <div id="textHerTimer" style="margin-top: 18px; color: #fff; font-size: 1.1em; font-weight: 600; text-align: center;"></div>
            </div>
        </div>
    `;
    choiceArea.style.display = 'block';
    backButton.style.display = 'block';
    videoTitle.textContent = 'What would you do next?';
    storyState = 'waitTextHer';
    storyHistory.push('waitTextHer');
    let seconds = 10;
    const timerDiv = document.getElementById('textHerTimer');
    timerDiv.textContent = `You have ${seconds} seconds...`;
    if (textHerTimeout) clearTimeout(textHerTimeout);
    let interval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            timerDiv.textContent = `You have ${seconds} seconds...`;
        } else {
            clearInterval(interval);
            timerDiv.textContent = '';
            // When timer expires, show the final video
            choiceArea.style.display = 'none';
            backButton.style.display = 'block';
            setVideoSource(iframe, YOUTUBE_IDS['4']);
            videoTitle.textContent = 'The story continues...';
            storyState = 'final';
            storyHistory.push('final');
        }
    }, 1000);
    document.getElementById('textHerFinalBtn').onclick = function() {
        clearInterval(interval);
        choiceArea.style.display = 'none';
        backButton.style.display = 'block';
        setVideoSource(iframe, YOUTUBE_IDS['4']);
        videoTitle.textContent = 'The story continues...';
        storyState = 'final';
        storyHistory.push('final');
    };
}

function showTextHerButtonNoTimer() {
    const iframe = document.getElementById('storyVideo');
    const videoTitle = document.getElementById('videoTitle');
    const choiceArea = document.getElementById('choiceArea');
    const backButton = document.getElementById('backButton');
    choiceArea.innerHTML = `
        <div class="choice-content-overlay">
            <h3 class="choice-title">What would you do next?</h3>
            <div class="choice-options">
                <button id="textHerFinalBtnNoTimer" class="choice-btn" tabindex="0"><span class="choice-text">Text Her</span></button>
            </div>
        </div>
    `;
    choiceArea.style.display = 'block';
    backButton.style.display = 'block';
    videoTitle.textContent = 'What would you do next?';
    storyState = 'waitTextHer';
    storyHistory.push('waitTextHer');
    document.getElementById('textHerFinalBtnNoTimer').onclick = function() {
        choiceArea.style.display = 'none';
        backButton.style.display = 'block';
        setVideoSource(iframe, YOUTUBE_IDS['4']);
        videoTitle.textContent = 'The story continues...';
        storyState = 'final';
        storyHistory.push('final');
    };
}

function showRestartButton() {
    const restartSection = document.getElementById('restartSection');
    const backButton = document.getElementById('backButton');
    const videoTitle = document.getElementById('videoTitle');
    restartSection.style.display = 'block';
    backButton.style.display = 'none';
    videoTitle.textContent = 'Want to try again?';
    storyState = 'complete';
    storyHistory.push('complete');
}

function goBack() {
    const iframe = document.getElementById('storyVideo');
    const choiceArea = document.getElementById('choiceArea');
    const restartSection = document.getElementById('restartSection');
    const backButton = document.getElementById('backButton');
    const videoTitle = document.getElementById('videoTitle');
    // Remove the current step
    storyHistory.pop();
    // If no history, restart to the beginning (show choice after 1.mov)
    if (storyHistory.length === 0) {
        setVideoSource(iframe, YOUTUBE_IDS['1']);
        videoTitle.textContent = 'What would you do?';
        choiceArea.style.display = 'block';
        restartSection.style.display = 'none';
        backButton.style.display = 'block';
        showChoiceArea();
        storyState = 'choice';
        currentBranch = null;
        return;
    }
    // Get the previous step
    const prevStep = storyHistory[storyHistory.length - 1];
    if (prevStep === 'choice') {
        // Only show choice after 1.mov if it's the very first step
        setVideoSource(iframe, YOUTUBE_IDS['1']);
        videoTitle.textContent = 'What would you do?';
        choiceArea.style.display = 'block';
        restartSection.style.display = 'none';
        backButton.style.display = 'block';
        showChoiceArea();
        storyState = 'choice';
        currentBranch = null;
    } else if (prevStep === 'final') {
        // Go back to the previous branch video
        if (currentBranch === 'text') {
            setVideoSource(iframe, YOUTUBE_IDS['3']);
        } else if (currentBranch === 'clean') {
            setVideoSource(iframe, YOUTUBE_IDS['2']);
        }
        choiceArea.style.display = 'none';
        restartSection.style.display = 'none';
        backButton.style.display = 'block';
        videoTitle.textContent = 'The story continues...';
        storyState = 'final';
    } else if (prevStep === 'waitTextHer') {
        // Go back to 2.mov (for the clean branch)
        setVideoSource(iframe, YOUTUBE_IDS['2']);
        choiceArea.style.display = 'none';
        restartSection.style.display = 'none';
        backButton.style.display = 'block';
        videoTitle.textContent = 'The story continues...';
        storyState = 'final';
    } else if (prevStep === 'complete') {
        // Go back to 4.mov
        setVideoSource(iframe, YOUTUBE_IDS['4']);
        choiceArea.style.display = 'none';
        restartSection.style.display = 'none';
        backButton.style.display = 'block';
        videoTitle.textContent = 'The story continues...';
        storyState = 'final';
    }
}

function restartStory() {
    const iframe = document.getElementById('storyVideo');
    const choiceArea = document.getElementById('choiceArea');
    const restartSection = document.getElementById('restartSection');
    const backButton = document.getElementById('backButton');
    const videoTitle = document.getElementById('videoTitle');
    choiceArea.style.display = 'none';
    restartSection.style.display = 'none';
    backButton.style.display = 'none';
    setVideoSource(iframe, YOUTUBE_IDS['1']);
    videoTitle.textContent = 'Interactive Story Experience';
    storyState = 'initial';
    storyHistory = [];
    currentBranch = null;
}
// --- End Refactor ---