(function () {
    let links = document.getElementById('sidebar-items').children;
    let activeLink = `${location.protocol}//${location.host}${location.pathname}`
    
    if (links != null) {
        for (var i = 1; i < links.length; i++) {
            if(links[i].href == activeLink) {
                links[i].classList.add('btn-active');
                return;
            }
        }
    }
})();