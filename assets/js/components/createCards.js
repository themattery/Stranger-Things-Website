export function createCard(infoCard) {
    return `
    <div class="info-card">
        <img src="${infoCard.image}" alt="">
        <div class="info-card-title">${infoCard.title.toUpperCase()}</div>
    </div>
    `
}