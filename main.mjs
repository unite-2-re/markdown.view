/*import "./scss/markdown/github-markdown.scss"
import "./scss/markdown/github-markdown-dark.scss"
import "./scss/markdown/github-markdown-light.scss"
import "./scss/print/Print.scss"*/
import "./scss/main.scss"
import "./js/Markdown.mjs"

//
addEventListener("message", (ev)=>{
    const markdown = document?.querySelector?.("md-view");
    if (markdown) { markdown.setAttribute("src", ev?.data?.src || ""); };
});
