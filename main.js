const mobil = document.getElementById("mobil")

document.getElementById("menu").addEventListener("click", function(){

    mobil.classList.add("displayed")
    document.body.classList.add("unfocused")
})


document.getElementById("close").addEventListener("click", function(){

    mobil.classList.remove("displayed")
    document.body.classList.remove("unfocused")
})