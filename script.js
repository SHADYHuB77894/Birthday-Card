// #!/usr/bin/env node

document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});