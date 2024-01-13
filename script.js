let count = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
    counterElement.textContent = count;
}

function increaseCount() {
    count++;
    updateCounter();
    animateCounter();
}

function decreaseCount() {
    count--;
    updateCounter();
    animateCounter();
}

function resetCount() {
    count = 0;
    updateCounter();
    animateCounter();
}

function animateCounter() {
    counterElement.classList.add('animate-counter');
    setTimeout(() => {
        counterElement.classList.remove('animate-counter');
    }, 500);
}