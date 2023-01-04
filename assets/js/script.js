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
    let production = datas.production;
    let educationCareerBody = document.getElementById('educationCareerBody');
    let languagesSkillsBody = document.getElementById('languagesSkillsBody');
    let dataBaseSkillsBody = document.getElementById('dataBaseSkillsBody');
    let frameworkSkillsBody = document.getElementById('frameworkSkillsBody');
    let cmsSkillsBody = document.getElementById('cmsSkillsBody');
    let webDesignSkillsBody = document.getElementById('webDesignSkillsBody');
    let toolsSkillsBody = document.getElementById('toolsSkillsBody');
    let projectManagementSkillsBody = document.getElementById('projectManagementSkillsBody');
    let productionBody = document.getElementById('productionBody');
    let textAnim = document.getElementById('nameJob');

    new Typewriter(textAnim, {
        loop: true,
        deleteSpeed: 100
    })
    .changeDelay(100)
    .typeString('Développeuse Web -<br>')
    .pauseFor(300)
    .typeString('Web Mobile')
    .pause(3000)
    .deleteChars(28)
    .start()

    skills.forEach((element) => {
        if (element.part == 'Langages') {
            // let newStarRating = starGrade(element.grade);
            languagesSkillsBody.innerHTML += `
            <div class="col-6" id="${element.id}">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <div class="iconsImg">
                            <img class="img-fluid" src="${element.image}" alt="${element.alt}">
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center nameElement">
                        <p>${element.name}</p>
                    </div>
                </div>
            </div>`;
        };
    });
    skills.forEach((element) => {
        if (element.part == 'Base de données') {
            // let newStarRating = starGrade(element.grade);
            dataBaseSkillsBody.innerHTML += `
            <div class="col-6" id="${element.id}">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <div class="iconsImg">
                            <img class="img-fluid" src="${element.image}" alt="${element.alt}">
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center nameElement">
                        <p>${element.name}</p>
                    </div>
                </div>
            </div>`;
        };
    });
    skills.forEach((element) => {
        if (element.part == 'Framework') {
            // let newStarRating = starGrade(element.grade);
            frameworkSkillsBody.innerHTML += `
            <div class="col-6" id="${element.id}">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <div class="iconsImg">
                            <img class="img-fluid" src="${element.image}" alt="${element.alt}">
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center nameElement">
                        <p>${element.name}</p>
                    </div>
                </div>
            </div>`;
        };
    });
    skills.forEach((element) => {
        if (element.part == 'CMS') {
            // let newStarRating = starGrade(element.grade);
            cmsSkillsBody.innerHTML += `
            <div class="col-6 col-lg-4" id="${element.id}">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <div class="iconsImg">
                            <img class="img-fluid" src="${element.image}" alt="${element.alt}">
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center nameElement">
                        <p>${element.name}</p>
                    </div>
                </div>
            </div>`;
        };
    });
    skills.forEach((element) => {
        if (element.part == 'Web design') {
            // let newStarRating = starGrade(element.grade);
            webDesignSkillsBody.innerHTML += `
            <div class="col-6" id="${element.id}">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <div class="iconsImg">
                            <img class="img-fluid" src="${element.image}" alt="${element.alt}">
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center nameElement">
                        <p>${element.name}</p>
                    </div>
                </div>
            </div>`;
        };
    });
    skills.forEach((element) => {
        if (element.part == 'Outils de développement') {
            // let newStarRating = starGrade(element.grade);
            toolsSkillsBody.innerHTML += `
            <div class="col-6 col-lg-4" id="${element.id}">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <div class="iconsImg">
                            <img class="img-fluid" src="${element.image}" alt="${element.alt}">
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center nameElement">
                        <p>${element.name}</p>
                    </div>
                </div>
            </div>`;
        };
    });
    skills.forEach((element) => {
        if (element.part == 'Gestion de projet') {
            // let newStarRating = starGrade(element.grade);
            projectManagementSkillsBody.innerHTML += `
            <div class="col-6 col-lg-4" id="${element.id}">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <div class="iconsImg">
                            <img class="img-fluid" src="${element.image}" alt="${element.alt}">
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center nameElement">
                        <p>${element.name}</p>
                    </div>
                </div>
            </div>`;
        };
    });
    education.forEach((element) => {
        educationCareerBody.innerHTML += `
        <div class="col-12" id="${element.id}">
            <div class="row">
                <div class="col-12 col-lg-1">
                    <hr>
                    <p class="dateElement">${element.date}</p>
                </div>
                <div class="col-12 col-lg-7">
                    <p class="degreeElement">${element.degree}</p>
                </div>
                <div class="col-12 col-lg-2">
                    <p class="gradeElement">${element.grade}</p>
                </div>
                <div class="col-12 col-lg-2">
                    <p class="placeElement">${element.place}</p>
                </div>
            </div>
        </div>`;
    });
    production.forEach((element) => {
        if (element.link != '#') {
            productionBody.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 colCard">
                <div class="cardProduct mb-3">
                    <div class="card cardOneProduct" id="${element.id}">
                        <img src="${element.image}" class="card-img-top img-fluid" alt="${element.alt}">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}<h5>
                            <p class="card-text">${element.description}</p>
                        </div>
                    </div>
                    <div class="overlay">
                        <a href="${element.link}" class="btn btnOneProduct" target="_blank">Voir le site</a>
                    </div>
                </div>
            </div>`;
        } else {
            productionBody.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 colCard">
                <div class="cardProduct mb-3">
                    <div class="card cardOneProduct" id="${element.id}">
                        <img src="${element.image}" class="card-img-top img-fluid" alt="${element.alt}">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}<h5>
                            <p class="card-text">${element.description}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        };
    });
});