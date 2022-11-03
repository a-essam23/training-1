/**
 * Creates an HTML tag with or without class names and text content.
 *
 * @param {string} tag HTML tag.
 * @param {string} className One or more classes seperated by single white space. Empty string means that there is no class names for this tag.
 * @param {string} textContent Text content of an HTML element.
 * @returns HTML element.
 */
export const createElement = (tag, className, textContent) => {
    const element = document.createElement(tag);
    if (className.length > 0) {
        className.split(" ").forEach((elm) => {
            element.classList.add(elm);
        });
    }
    if (textContent) element.innerText = textContent;
    return element;
};
