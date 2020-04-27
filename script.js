document.addEventListener("DOMContentLoaded", function() {
    const [link1, link2, link3, link4] = document.querySelectorAll('.tabbar-item a');
    link1.addEventListener('click', (e) => { showTab(link1) }, true);
    link2.addEventListener('click', (e) => { showTab(link2) }, true);
    link3.addEventListener('click', (e) => { showTab(link3) }, true);
    link4.addEventListener('click', (e) => { showTab(link4) }, true);


    function desactivateAllLinks() {
        link1.classList.remove('active');
        link3.classList.remove('active');
        link4.classList.remove('active');
        link2.classList.remove('active');
    }
    
    function showTab (link) {
        desactivateAllLinks();
        link.classList.add('active');
        const href = link.href;
        const target = href.split('#')[href.split('#').length - 1];
        const tabs = document.querySelectorAll('.page .content');
        for (var i = 0; i < tabs.length ; i++) {
            const tabId = tabs[i].id;
            tabs[i].setAttribute('style', 'display: none !important;');
            if (tabId === target) {
                tabs[i].setAttribute('style', 'display: block !important;');
            }
        }
    }
});
