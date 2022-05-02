const headerComponent = function(title){
    return `
    <header>${title}</header>
    `
}

const sectionComponent = function(id, buttonText, h2Text ){
    return`
    <section id="${id}">
        <h2>${h2Text} <span>Hello</span></h2>
        <button>${buttonText}</button>
    </section>
    `
}

const footerComponent = function (){
    return `
        <footer></footer>
    `
}


const loadEvent = function (){
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforebegin", headerComponent("Responsivity practice"));

    let sections = ""
    for (let index = 1; index < 5; index++) {
        sections += sectionComponent(`id-${index}`, `Click me ${index}`, `Subtitle ${index}`)
    }

    rootElement.insertAdjacentHTML("beforeend", sections);

    rootElement.insertAdjacentHTML("afterend", footerComponent());


}



window.addEventListener("load", loadEvent)