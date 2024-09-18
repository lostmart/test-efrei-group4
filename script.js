// selectioner le bouton
const btn = document.querySelector("button")

// rajouter une event listener "click"
btn.addEventListener("click", (e) => {
	// console.log(e.target)
	e.target.innerText = "hello clicks"
})

// affiche la variable "btn" dans la console
console.log(btn)
