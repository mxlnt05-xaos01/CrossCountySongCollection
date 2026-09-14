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
    area.addEventListener('click', () => {
        const textpickup = area.getAttribute("title");
        const frame = document.querySelector('iframe');
        switch(textpickup) {
            case "Cape May County":
                frame.contentDocument = "/assets/htmlpages/CapeMayCounty.html";
            case "Cumberland County":
                frame.contentDocument = "Cumberland.html";
            case "Salem County":
                frame.src = "Salem.html";
            case "Atlantic County":
                frame.src = "Atlantic.html";
            case "Gloucester County":
                return frame.src = "Gloucester.html";
            case "Camden County":
                return frame.src = "Camden.html";
            case "Burlington County":
                return frame.src = "Burlington.html";
            case "Ocean County":
                return frame.src = "Ocean.html";
            case "Monmouth County":
                return frame.src = "Monmouth.html";
            case "Mercer County":
                return frame.src = "Mercer.html";
            case "Middlesex County":
                return frame.src = "Middlesex.html";
            case "Somerset County":
                return frame.src = "Somerset.html";
            case "Hunterdon County":
                return frame.src = "Hunterdon.html";
            case "Union County":
                return frame.src = "Union.html";
            case "Essex County":
                return frame.src = "Essex.html";
            case "Hudson County":
                return frame.src = "Hudson.html";
            case "Morris County":
                return frame.src = "Morris.html";
            case "Warren County":
                return frame.src = "Warren.html";
            case "Sussex County":
                return frame.src = "Sussex.html";
            case "Passaic County":
                return frame.src = "Passaic.html";
            case "Bergen County":
                return frame.src = "Bergen.html";
        }
    });
});