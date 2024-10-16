function includeHTML() {
    const elements = document.querySelectorAll('[data-include-html]');
    elements.forEach(async function (element) {
        const file = element.getAttribute('data-include-html');
        if (file) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    element.innerHTML = await response.text();
                } else {
                    console.error('Error loading file:', file);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    });
}

includeHTML();
