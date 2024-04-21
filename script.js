function toggleLanguageTab() {
    const languageTab = document.querySelector('.langtab');
    if (languageTab.style.display === 'none' || languageTab.style.display === '') {
        languageTab.style.display = 'block';
    } else {
        languageTab.style.display = 'none';
    }
}

function closeLanguageTab() {
    const languageTab = document.querySelector('.langtab');
    languageTab.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const langButton = document.getElementById('lang');
    const lang2Button = document.getElementById('lang2');

    if (langButton) {
        langButton.addEventListener('click', function(event) {
            event.preventDefault();
            toggleLanguageTab();
        });
    }

    if (lang2Button) {
        lang2Button.addEventListener('click', function(event) {
            event.preventDefault();
            toggleLanguageTab();
        });
    }

    const closeButton = document.getElementById('close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            closeLanguageTab();
        });
    }
});