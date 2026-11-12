const hover = document.querySelectorAll('area');
const county = document.getElementById('countyinfo');

hover.forEach(area => {
    area.addEventListener('mouseover', () => {
        const displayText = area.getAttribute("title");
        if(displayText) {
            county.textContent = displayText;
            county.classList.remove('hidden');
        }
    });
    area.addEventListener('mousemove', () => {
        const displayText = area.getAttribute("title");
        if(displayText) {
            county.textContent = displayText;
        }
    });
    area.addEventListener('mouseout', () => {
        county.textContent = "";
        county.classList.add('hidden');
    });
});

// // JSON Notice:
// async function Fetch(filepath) {
//     const response = await fetch(filepath);
// }