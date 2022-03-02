function starGrade(grade) {
    let page;
    if (grade == '1') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>`;
    } else if (grade == '1.5') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>`;
    } else if (grade == '2') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>`;
    } else if (grade == '2.5') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>`;
    } else if (grade == '3') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>`;
    } else if (grade == '3.5') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
        <i class="bi bi-star"></i>`;
    } else if (grade == '4') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>`;
    } else if (grade == '4.5') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
        <i class="bi bi-star"></i>`;
    } else if (grade == '5') {
        page = `
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>`;
    };
    return page;
}

fetch('./assets/data/cv.json')
.then((response) => {
    return response.json();
})
.then((datas) => {
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

    // let career = datas.career;
    // let education = datas.education;
    let skills = datas.skills;
    let frontEndSkillsBody = document.getElementById('frontEndSkillsBody');

    skills.forEach((element) => {
        if (element.part == 'Front-End') {
            let newStarRating = starGrade(element.grade);
            frontEndSkillsBody.innerHTML += `
            <div class="col-12 col-lg-6 ps-5" id="${element.id}">
                <div class="row">
                    <div class="col-12 col-lg-6 ps-5">
                        <p>${element.name}</p>
                    </div>
                    <div class="col-12 col-lg-6 ps-5">
                        <div class="starRating">
                            ${newStarRating}
                        </div>
                    </div>
                </div>
            </div>`;
            
        };
    })
});