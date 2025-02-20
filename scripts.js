document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const cardWidth = 316; 
    let currentIndex = 0;
    let totalCards = cardContainer.children.length;

    // All these do is smooth the listing thing, yey 
    const cardsToClone = Math.min(totalCards, 6);
    for (let i = 0; i < cardsToClone; i++) {
        const clone = cardContainer.children[i].cloneNode(true);
        cardContainer.appendChild(clone);
    }

    totalCards = cardContainer.children.length;
    cardContainer.style.width = `${totalCards * cardWidth}px`;

    function moveCards(direction) {
        if (direction === 'left') {
            currentIndex--;
            if (currentIndex < 0) {
                cardContainer.style.transition = 'none';
                currentIndex = totalCards - cardsToClone - 1;
                cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                setTimeout(() => {
                    cardContainer.style.transition = 'transform 0.5s ease';
                    currentIndex--;
                    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                }, 10);
            } else {
                cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
        } else {
            currentIndex++;
            cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            if (currentIndex >= totalCards - cardsToClone) {
                setTimeout(() => {
                    cardContainer.style.transition = 'none';
                    currentIndex = 0;
                    cardContainer.style.transform = `translateX(0)`;
                    setTimeout(() => {
                        cardContainer.style.transition = 'transform 0.5s ease';
                    }, 10);
                }, 500);
            }
        }
    }


    prevButton.addEventListener('click', () => moveCards('left'));
    nextButton.addEventListener('click', () => moveCards('right'));

    window.addEventListener('resize', () => {
        cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });
});

