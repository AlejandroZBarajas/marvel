export class ListaComics{
    
    #listacomics=[]

    addComicToList(comic){this.#listacomics.push(comic)}
    getListComic(){return this.#listacomics}

}


/*
const btnView = document.getElementById("btn-view")
btnView.addEventListener("click", ()=>{
    const div = document.getElementById("divChar") <<<<

    console.log(listCharacter.getCharacters())
    
    listCharacter.getCharacters().forEach(item => {

      let char = document.createElement("div")
      divChar.appendChild(char)

      let charImg = document.createElement("img")
      charImg.src = item.getImage()
      char.appendChild(charImg)
      
      let charId = document.createElement("h1")
      charId.innerText = item.getId()
      char.appendChild(charId)
      
      let charName = document.createElement("h2")
      charName.innerText = item.getName()
      char.appendChild(charName)

      let charStatus = document.createElement("h2")
      charStatus.innerText = item.getStatus()
      char.appendChild(charStatus)   
    })
})*/