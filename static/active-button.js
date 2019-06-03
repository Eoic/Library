(function () {
    let links = document.getElementById('sidebar-items');
    let activeLink = `${location.protocol}//${location.host}${location.pathname}`

    if (links === null)
        return;
    else links = links.children;

    if (links != null) {
        for (var i = 1; i < links.length; i++) {
            if (links[i].href == activeLink) {
                links[i].classList.add('btn-active');
                return;
            }
        }
    }
})();