// Function to update current date and time
function updateDateTime() {
    const now = new Date();
    
    // Format date (e.g., "Aug 31, 2025")
    const dateOptions = { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);
    
    // Format time (e.g., "10:44:31")
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    
    // Update the DOM elements
    document.getElementById('current-date').textContent = formattedDate;
    document.getElementById('current-time').textContent = formattedTime;
}

// Function to change ID logo colors dynamically
function changeIDColors() {
    const idCircle = document.querySelector('.id-circle');
    const colors = [
        '#81C784', // Green
        '#FF9800', // Orange
        '#E91E63', // Pink
        '#9C27B0', // Purple
        '#2196F3', // Blue
        '#FF5722', // Red
        '#00BCD4', // Cyan
        '#FFC107'  // Amber
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    idCircle.style.backgroundColor = randomColor;
    
    // Add a subtle scale effect
    idCircle.style.transform = 'scale(1.1)';
    setTimeout(() => {
        idCircle.style.transform = 'scale(1)';
    }, 200);
}

// Update date and time immediately
updateDateTime();

// Update every second to keep time current
setInterval(updateDateTime, 1000);

// Change ID colors every 2 seconds
setInterval(changeIDColors, 2000);

// Also update the status bar time
function updateStatusBarTime() {
    const now = new Date();
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    
    // Update status bar time
    const statusTime = document.querySelector('.status-bar .time');
    if (statusTime) {
        statusTime.textContent = formattedTime;
    }
}

// Update status bar time every minute
setInterval(updateStatusBarTime, 60000);
updateStatusBarTime(); // Update immediately

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to the ID logo
    const idCircle = document.querySelector('.id-circle');
    idCircle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    idCircle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Add click effect to change color immediately
    idCircle.addEventListener('click', function() {
        changeIDColors();
    });
});
