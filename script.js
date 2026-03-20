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
