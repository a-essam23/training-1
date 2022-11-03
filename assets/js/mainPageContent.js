import { createElement } from "./utilities.js";

/**
 * Creates all the content of the "Home" page.
 *
 * @returns HTML element.
 */
export const homePageBuild = () => {
    const homePage = createElement("main", "main");
    homePage.appendChild(mainHeaderBuild());
    homePage.appendChild(mainSection1Build());
    homePage.appendChild(mainSection2Build());
    return homePage;
};

/**
 * Creates the content of the header of the "Home" page.
 *
 * @returns HTML element.
 */
const mainHeaderBuild = () => {
    const mainHeader = createElement("header", "main__header");
    const wraper = createElement("div", "wraper");

    wraper.appendChild(createElement("h2", "", `Lorem Ipsum Dolor`));
    wraper.appendChild(createElement("p", "", `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia vero aut at sed corrupti incidunt dicta magnam consequatur error.`));

    mainHeader.appendChild(wraper);
    return mainHeader;
};

/**
 * creates the content of the first section of the "Home" page.
 *
 * @returns HTML element.
 */
const mainSection1Build = () => {
    const mainSection1 = createElement("section", "main__section main__section-1");
    const wraper = createElement("div", "wraper");
    const icons = [`<i class="fa-brands fa-canadian-maple-leaf"></i>`, `<i class="fa-solid fa-volcano"></i>`, `<i class="fa-solid fa-feather"></i>`, `<i class="fa-solid fa-clover"></i>`];

    for (let i = 1; i <= 4; i++) {
        const mainSubSection = createElement("figure", "main__subsection");
        mainSubSection.innerHTML = icons[i - 1];
        mainSubSection.appendChild(createElement("figcaption", "", `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit fugit non neque, necessitatibus excepturi quisquam soluta veniam ab doloremque possimus.`));
        wraper.appendChild(mainSubSection);
    }

    mainSection1.appendChild(createElement("h3", "", `Lorem Ipsum`));
    mainSection1.appendChild(wraper);
    return mainSection1;
};

/**
 * Creates the content of the second section of the "Home" page.
 *
 * @returns HTML element.
 */
const mainSection2Build = () => {
    const mainSection2 = createElement("section", "main__section main__section-2");
    const wraper = createElement("div", "wraper");
    const icons = [`<i class="fa-solid fa-locust"></i>`, `<i class="fa-solid fa-mosquito"></i>`, `<i class="fa-solid fa-spider"></i>`, `<i class="fa-solid fa-bug"></i>`];

    for (let i = 1; i <= 4; i++) {
        const mainSubSection = createElement("figure", "main__subsection");
        mainSubSection.innerHTML = icons[i - 1];
        mainSubSection.appendChild(createElement("figcaption", "", `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit fugit non neque, necessitatibus excepturi quisquam soluta veniam ab doloremque possimus.`));
        wraper.appendChild(mainSubSection);
    }

    mainSection2.appendChild(createElement("h3", "", `Lorem Ipsum`));
    mainSection2.appendChild(wraper);
    return mainSection2;
};
