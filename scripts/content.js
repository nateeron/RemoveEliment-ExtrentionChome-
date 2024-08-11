console.log('content.js');

function removeElements() {
    console.log('Removing elements');
    const elements = document.querySelectorAll('.module_home_x');
    elements.forEach(el => el.remove());

    const elements5 = document.querySelectorAll('#animekimiads5');
    elements5.forEach(el => el.remove());


    const elements2 = document.querySelectorAll('#animekimiads2');
    elements2.forEach(el => el.remove());


    const elements3 = document.querySelectorAll('#animekimiads3');
    elements3.forEach(el => el.remove());
    
}

document.addEventListener('DOMContentLoaded', function() {
    removeElements();
});

function setupObserver() {
    const observer = new MutationObserver(() => {
        removeElements();
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

setupObserver();
