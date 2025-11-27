// Drag and Drop functionality for Materi 1 Sub 2
document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll(".column");
    const texts = document.querySelectorAll(".text");
    const cekButton = document.querySelector(".cek-button");
    const resetButton = document.querySelector(".reset-button");
    const scoreText = document.querySelector(".score-text");
    const textContainers = document.querySelector(".container-text");
    const pinButton = document.querySelector(".pin-button");

    let originalTexts = [];
    let originalPositions = new Map();
    let isChecked = false;
    let draggedElement = null;
    let isDragging = false;
    let lastMouseY = 0;

    // Initialize original texts and positions
    window.onload = () => {
        originalTexts = Array.from(textContainers.querySelectorAll(".text"));
        const texts = document.querySelectorAll(".text");
        texts.forEach(text => {
            originalPositions.set(text, text.parentElement);
        });
    };

    // Add mouse event listeners for custom drag implementation
    texts.forEach((text) => {
        text.addEventListener("mousedown", handleMouseDown);
        // Remove native drag events to prevent interference
        text.removeAttribute("draggable");
    });

    // Add mouse event listeners to columns
    columns.forEach((column) => {
        column.addEventListener("mouseup", handleMouseUp);
        column.addEventListener("mousemove", handleMouseMove);
    });

    // Add global mouse events for better control
    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);

    // Button event listeners
    cekButton.addEventListener("click", cekJawaban);
    resetButton.addEventListener("click", resetGame);
    pinButton.addEventListener("click", togglePin);

    function handleMouseDown(event) {
        draggedElement = event.target;
        isDragging = true;
        lastMouseY = event.clientY;
        draggedElement.classList.add("dragging");
        draggedElement.style.opacity = "0.7";
        draggedElement.style.cursor = "grabbing";
        
        // Prevent text selection during drag
        event.preventDefault();
    }

    function handleGlobalMouseMove(event) {
        if (!isDragging || !draggedElement) return;
        
        lastMouseY = event.clientY;
        
        // Auto-scroll when dragging near viewport edges
        const viewportHeight = window.innerHeight;
        const scrollThreshold = 50; // pixels from edge to trigger scroll
        const scrollSpeed = 15; // scroll speed in pixels
        
        if (lastMouseY < scrollThreshold) {
            // Scroll up when near top
            window.scrollBy(0, -scrollSpeed);
        } else if (lastMouseY > viewportHeight - scrollThreshold) {
            // Scroll down when near bottom
            window.scrollBy(0, scrollSpeed);
        }
        
        // Auto-scroll when dragging near container boundaries
        const container = textContainers;
        if (container && draggedElement.parentElement === container) {
            const containerRect = container.getBoundingClientRect();
            const elementRect = draggedElement.getBoundingClientRect();
            const containerScrollThreshold = 30; // pixels from container edge
            
            // Check if element is near bottom boundary of container
            if (elementRect.bottom > containerRect.bottom - containerScrollThreshold) {
                // Scroll container down
                container.scrollTop += scrollSpeed;
            }
            // Check if element is near top boundary of container
            else if (elementRect.top < containerRect.top + containerScrollThreshold) {
                // Scroll container up
                container.scrollTop -= scrollSpeed;
            }
        }
    }

    function handleMouseMove(event) {
        if (!isDragging) return;
        event.preventDefault();
    }

    function handleMouseUp(event) {
        if (!isDragging || !draggedElement) return;
        
        const target = event.target;
        if (target.classList.contains("column") && !target.hasChildNodes()) {
            target.appendChild(draggedElement);
        }
        
        endDrag();
    }

    function handleGlobalMouseUp() {
        if (isDragging) {
            endDrag();
        }
    }

    function endDrag() {
        if (draggedElement) {
            draggedElement.classList.remove("dragging");
            draggedElement.style.opacity = "";
            draggedElement.style.cursor = "";
            draggedElement = null;
        }
        isDragging = false;
    }

    function togglePin() {
        if (textContainers.classList.contains("pinned")) {
            textContainers.classList.remove("pinned");
            textContainers.style.position = "relative"; // Kembali ke posisi semula
        } else {
            textContainers.classList.add("pinned");
            textContainers.style.position = "fixed"; // Mengubah posisi menjadi fixed
        }
        pinButton.classList.toggle("pinned");
        
        // Update icon based on pinned state
        const icon = pinButton.querySelector("i");
        if (textContainers.classList.contains("pinned")) {
            icon.className = "fi fi-rr-marker pinned";
            pinButton.title = "Unpin container";
        } else {
            icon.className = "fi fi-rr-marker";
            pinButton.title = "Pin container";
        }
    }

    function cekJawaban() {
        if (isChecked) return;

        let correctCount = 0;
        columns.forEach((column) => {
            const targetNumber = column.dataset.target;
            const text = column.querySelector(".text");

            if (text && text.dataset.source === targetNumber) {
                column.classList.add("correct");
                column.classList.remove("incorrect");
                correctCount++;
            } else {
                column.classList.add("incorrect");
                column.classList.remove("correct");
            }
        });

        const score = Math.round((correctCount / columns.length) * 100);
        scoreText.textContent = `Nilai: ${score}`;

        // SweetAlert for result display - using SweetAlert v1 format
        let iconType = score >= 80 ? 'success' : score >= 50 ? 'warning' : 'error';
        let titleText = score >= 80 ? 'Hebat!' : score >= 50 ? 'Cukup Baik!' : 'Perlu Latihan!';
        
        swal({
            title: titleText,
            text: `Jawaban telah diterima! Anda mendapatkan nilai ${score}`,
            icon: iconType,
            buttons: {
                confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "btn-primary",
                    closeModal: true
                },
                cancel: {
                    text: "Ulangi",
                    value: false,
                    visible: true,
                    className: "btn-secondary",
                    closeModal: true
                }
            }
        }).then((value) => {
            if (value === false) {
                resetGame();
            }
        });

        cekButton.disabled = true;
        isChecked = true;
    }

    function resetGame() {
        columns.forEach((column) => {
            column.innerHTML = "";
            column.classList.remove("correct", "incorrect");
        });

        // Restore texts to their original positions
        originalTexts.forEach((text) => {
            const originalParent = originalPositions.get(text);
            if (originalParent) {
                originalParent.appendChild(text);
            } else {
                textContainers.appendChild(text);
            }
        });

        scoreText.textContent = "Nilai: 0";

        cekButton.disabled = false;
        isChecked = false;
    }

    // Add request object for logging
    const request = {
        method: 'GET',
        path: window.location.pathname
    };
});
