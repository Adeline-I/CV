// Début API d'observateur d'intersection
// Permet d'effectuer des animations lorsque l'élément devient visible
let ratio = .1;
let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
};
let handleIntersect = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('revealVisible');
            observer.unobserve(entry.target);
        };
    });
};
let observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal"]').forEach(function (rvl) {
    observer.observe(rvl);
});
// Fin API d'observateur d'intersection