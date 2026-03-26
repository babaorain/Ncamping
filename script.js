// Initialize Lucide icons
lucide.createIcons();

// Any dynamic dashboard logic can go here.
// Currently, the dashboard is heavily CSS-grid driven and static,
// ensuring maximum performance and instant access to info.

// Example: Modal image viewer could be added here for the gallery.
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        // Just an alert for now, could be expanded to a full lightbox
        // if the user wants click-to-enlarge functionality
        console.log("Photo clicked:", img.src);
    });
});

// ==== Tab Control Logic ====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        // Add active to the clicked button
        btn.classList.add('active');
        
        // Find respective tab pane and add active
        const targetId = btn.getAttribute('data-tab');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    });
});
