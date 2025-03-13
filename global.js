/*console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$('nav a');

// console.log(navLinks);

let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

if (currentLink) { // or if (currentLink !== undefined)
    currentLink.classList.add("current");
}

// é equivalente a currentLink?.classList.add("current");
*/

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    {url: "contact/", title: "Contato"},
    {url: "resume/", title: "Currículo"},
    {url: "https://github.com/marimarifr", title: "Github"}    
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;

    // Create link and add it to nav
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if (a.host != location.host) {
        // console.log(a.host, location.host);
        a.setAttribute("target", "_blank");
    }

    nav.append(a);


}