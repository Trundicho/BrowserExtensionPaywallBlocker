window.addEventListener('load', function() {
    if (window.location.origin === 'https://www.spiegel.de') {
        const elements = document.querySelectorAll('[data-contains-flags="Spplus-paid"]');
        elements.forEach(function(element) {
            removeArticle(element);
        });
    }

    if (window.location.origin === 'https://www.zeit.de') {
        const elements = document.querySelectorAll('.zplus-logo');
        elements.forEach(function(element) {
            removeArticle(element);
        });
    }

    if (window.location.origin === 'https://www.heise.de') {
        const elements = document.querySelectorAll('[data-component="TeaserMeta"]');
        elements.forEach(function(element) {
            if(element.querySelector("svg[role='img'][preserveAspectRatio='xMinYMin']")) {
                removeArticle(element);
            }
        });
    }
});

function removeArticle(element) {
    const parentElement = findParentByTagName(element, 'ARTICLE');
    if (parentElement !== null) {
      parentElement.remove();
    }
}

function findParentByTagName(element, tagName) {
    if (!element.parentNode) {
        return null;
    }

    if (element.parentNode.tagName === tagName) {
        return element.parentNode;
    }

    return findParentByTagName(element.parentNode, tagName);
}
