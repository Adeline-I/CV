function starGrade(grade) {
    let page;
    if (grade == '1') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>`;
    } else if (grade == '1.5') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-half"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>`;
    } else if (grade == '2') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>`;
    } else if (grade == '2.5') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-half"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>`;
    } else if (grade == '3') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star"></i>
        <i class="starIcon bi-star"></i>`;
    } else if (grade == '3.5') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-half"></i>
        <i class="starIcon bi-star"></i>`;
    } else if (grade == '4') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star"></i>`;
    } else if (grade == '4.5') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-half"></i>
        <i class="starIcon bi-star"></i>`;
    } else if (grade == '5') {
        page = `
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>
        <i class="starIcon bi-star-fill"></i>`;
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

    // let experience = datas.experience;
    let education = datas.education;
    let skills = datas.skills;
    let educationCareerBody = document.getElementById('educationCareerBody');
    let frontEndSkillsBody = document.getElementById('frontEndSkillsBody');
    let backEndSkillsBody = document.getElementById('backEndSkillsBody');
    let cmsSkillsBody = document.getElementById('cmsSkillsBody');
    let webDesignSkillsBody = document.getElementById('webDesignSkillsBody');
    let environmentSkillsBody = document.getElementById('environmentSkillsBody');

    education.forEach((element) => {
        educationCareerBody.innerHTML += `
            <div class="col-12 ps-5" id="${element.id}">
                <div class="row">
                    <div class="col-12 col-lg-1 ps-5">
                        <p class="dateElement">${element.date}</p>
                    </div>
                    <div class="col-12 col-lg-7 ps-5">
                        <p class="degreeElement">${element.degree}</p>
                    </div>
                    <div class="col-12 col-lg-2 ps-5">
                        <p class="gradeElement">${element.grade}</p>
                    </div>
                    <div class="col-12 col-lg-2 ps-5">
                        <p class="placeElement">${element.place}</p>
                    </div>
                </div>
            </div>`;
    });
    skills.forEach((element) => {
        if (element.part == 'Front-End') {
            let newStarRating = starGrade(element.grade);
            frontEndSkillsBody.innerHTML += `
            <div class="col-12 col-lg-6 ps-5" id="${element.id}">
                <div class="row">
                    <div class="col-12 col-lg-6 ps-5 nameElement">
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
    });
    skills.forEach((element) => {
        if (element.part == 'Back-End') {
            let newStarRating = starGrade(element.grade);
            backEndSkillsBody.innerHTML += `
            <div class="col-12 col-lg-6 ps-5" id="${element.id}">
                <div class="row">
                    <div class="col-12 col-lg-6 ps-5 nameElement">
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
    });
    skills.forEach((element) => {
        if (element.part == 'CMS') {
            let newStarRating = starGrade(element.grade);
            cmsSkillsBody.innerHTML += `
            <div class="col-12 col-lg-6 ps-5" id="${element.id}">
                <div class="row">
                    <div class="col-12 col-lg-6 ps-5 nameElement">
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
    });
    skills.forEach((element) => {
        if (element.part == 'Web design') {
            let newStarRating = starGrade(element.grade);
            webDesignSkillsBody.innerHTML += `
            <div class="col-12 col-lg-6 ps-5" id="${element.id}">
                <div class="row">
                    <div class="col-12 col-lg-6 ps-5 nameElement">
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
    });
    skills.forEach((element) => {
        if (element.part == 'Environnement de travail') {
            let newStarRating = starGrade(element.grade);
            environmentSkillsBody.innerHTML += `
            <div class="col-12 col-lg-6 ps-5" id="${element.id}">
                <div class="row">
                    <div class="col-12 col-lg-6 ps-5 nameElement">
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
    });
});