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
        county.classList.add('hidden');
    });
});