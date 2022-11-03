import { createElement } from "./utilities.js";

/**
 * Creates all the content of the "About" page.
 *
 * @returns HTML element.
 */
export const aboutPageBuild = () => {
    const aboutPage = createElement("main", "about");
    aboutPage.appendChild(aboutHeaderBuild());
    aboutPage.appendChild(aboutSection1Build());
    aboutPage.appendChild(aboutSection2Build());
    return aboutPage;
};

/**
 * Creates the content of the header of the "About" page.
 *
 * @returns HTML element.
 */
const aboutHeaderBuild = () => {
    const aboutHeader = createElement("header", "about__header");
    const wraper = createElement("div", "wraper");

    wraper.appendChild(createElement("h2", "", `Lorem Ipsum Dolor Sit`));
    wraper.appendChild(createElement("p", "", `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus neque magni molestiae at cumque cum nostrum voluptates temporibus necessitatibus sequi! Itaque adipisci, eveniet ipsa minima praesentium beatae ea minus quisquam!`));

    aboutHeader.appendChild(wraper);
    return aboutHeader;
};

/**
 * creates the content of the first section of the "About" page.
 *
 * @returns HTML element.
 */
const aboutSection1Build = () => {
    const aboutSection1 = createElement("section", "about__section about__section-1");
    const wraper = createElement("div", "wraper");

    for (let i = 1; i <= 3; i++) {
        const aboutSubSection = createElement("article", "about__subsection");
        aboutSubSection.appendChild(createElement("h3", "", `Lorem Ipsum`));
        aboutSubSection.appendChild(createElement("p", "", `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eveniet fugit dolore, praesentium a vitae suscipit hic libero, reprehenderit iste modi dicta dolorum harum doloribus dolores esse ipsum! Repellat fuga fugiat adipisci nemo minima nisi autem molestiae tenetur deserunt et eaque totam possimus quis ea beatae consectetur in, eum voluptate dignissimos ut debitis quas voluptatibus qui aliquid? Aut, ipsum veritatis.`));
        wraper.appendChild(aboutSubSection);
    }

    aboutSection1.appendChild(wraper);
    return aboutSection1;
};

/**
 * Creates the content of the second section of the "About" page.
 *
 * @returns HTML element.
 */
const aboutSection2Build = () => {
    const aboutSection2 = createElement("section", "about__section about__section-2");
    const wraper = createElement("div", "wraper");
    const icons = [`<i class="fa-regular fa-face-smile-beam"></i>`, `<i class="fa-regular fa-face-laugh"></i>`, `<i class="fa-regular fa-face-grin-hearts"></i>`, `<i class="fa-regular fa-face-grin"></i>`];

    for (let i = 1; i <= 4; i++) {
        const aboutSubSection = createElement("figure", "about__subsection");
        aboutSubSection.innerHTML = icons[i - 1];
        aboutSubSection.appendChild(createElement("figcaption", "", `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod impedit atque repellat, in aperiam cumque porro dicta? Praesentium, cum nam!`));
        wraper.appendChild(aboutSubSection);
    }

    aboutSection2.appendChild(wraper);
    return aboutSection2;
};

/**
 * Creates the "Go back to home page" button.
 *
 * @returns Document fragment.
 */
export const backToHomeBtnBuild = () => {
    const backToHomeBtn = createElement("button", "back-to-home--btn");
    backToHomeBtn.setAttribute("id", "backToHomeBtn");
    backToHomeBtn.setAttribute("type", "button");
    backToHomeBtn.setAttribute("title", "Go back to home page");

    backToHomeBtn.appendChild(createElement("span", "screen-readers-only", `Go back to home page`));
    backToHomeBtn.appendChild(createElement("i", "fa-solid fa-arrow-left"));

    const fragment = document.createDocumentFragment();
    fragment.append(backToHomeBtn);
    return fragment;
};
