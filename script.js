const content = [
    {
        img: './images/icon-supervisor.svg',
        name: "Supervisor",
        about: "Monitors activity to identify project roadblocks",
        class: "super"
    },
    {
        img: './images/icon-team-builder.svg',
        name: "Team Builder",
        about: "Scans our talent network to create the optimal team for your project",
        class: "team"
    },
    {
        img: './images/icon-karma.svg',
        name: "Karma",
        about: "Regularly evaluates our talent to ensure quality",
        class:"karma"
    },
    {
        img: './images/icon-calculator.svg',
        name: "Calculator",
        about: "Uses data from past projects to provide better delivery estimates",
        class: "calculator"
    },
]

let main = document.querySelector(".card-area")
for(var i=0; i<content.length; i++){
    let card = `
    <div class="card-item card-item${i} ${content[i].class}">
        <h1>${content[i].name}</h1>
        <p>${content[i].about}</p>
        <img src=${content[i].img} alt="">
    </div>
    `

    main.innerHTML += card
}