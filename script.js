  // JavaScript to show/hide the popup
        const triggerBtn = document.getElementById('trigger-btn');
        const popup = document.getElementById('popup');
        const closeBtn = document.getElementById('close-btn');
        // Show popup when trigger button is clicked
        triggerBtn.addEventListener('click', function() {
            popup.style.display = 'block';
        });
        // Hide popup when close button is clicked
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });