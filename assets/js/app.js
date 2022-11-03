import { aboutPageBuild, backToHomeBtnBuild } from "./aboutPageContent.js";
import { homePageBuild } from "./mainPageContent.js";

let currentPage = "homePage";

function initApp() {
    const aboutBtn = document.getElementById("aboutBtn");

    if (currentPage === "homePage") {
        aboutBtn.addEventListener("click", changePageLayout);
    } else {
        aboutBtn.removeEventListener("click", changePageLayout);

        const backToHomeBtn = document.getElementById("backToHomeBtn");
        backToHomeBtn.addEventListener("click", changePageLayout);
    }
}

document.addEventListener("DOMContentLoaded", initApp);

const changePageLayout = () => {
    const pageMain = document.querySelector("main");
    pageMain.remove();

    const fragment = document.createDocumentFragment();
    let backBtn = false;
    if (currentPage === "homePage") {
        fragment.append(aboutPageBuild());
        backBtn = true;
        currentPage = "aboutPage";
    } else {
        document.getElementById("backToHomeBtn").remove();
        fragment.append(homePageBuild());
        backBtn = false;
        currentPage = "homePage";
    }

    const pageBody = document.querySelector("body");
    const pageFooter = pageBody.querySelector("#pageFooter");
    pageBody.insertBefore(fragment, pageFooter);

    if (backBtn) pageFooter.insertBefore(backToHomeBtnBuild(), pageFooter.querySelector("p"));

    initApp();
};
