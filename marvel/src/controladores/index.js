import {hash, publicKey, listacomic, listacreadores, key, hashkey} from "./dependencias.js"
import {Comic} from "../modelos/comic.js"
import { Creadores } from "../modelos/creadores.js"

let getApi = document.getElementById("btn-cargar")
getApi.addEventListener("click", function(){
    let url= "https://gateway.marvel.com/v1/public/comics"
    fetch(url+key+hashkey)
    .then( response => response.json()
    ).then(
        data2 =>{
            data2.data.results.forEach(element => {  
                let comic = new Comic
                comic.setId("id: "+element.id)
                comic.setTitulo("Titulo: "+element.title)
                comic.setSerie("Serie: "+element.series.name)
                comic.setPaginas("Páginas: "+element.pageCount)
                comic.setPortada(element.thumbnail.path+".jpg")
                comic.setUrlCreadores(element.creators.collectionURI+key+hashkey) 
                fetch(comic.getUrlCreadores())
                .then(response => response.json()
                ).then(
                    data3=>{
                        data3.data.results.forEach(element => {
                            let creador = new Creadores
                            creador.setId("Creador id: "+element.id)
                            creador.setFullname("Nombre del creador: "+element.fullName)                           
                                comic.addCreador(creador) 
                                listacreadores.addCreator(creador)                             
                                listacomic.addComicToList(comic)
                            });
                        }
                        )               
                    });
        }
    )
})

const printComics = document.getElementById("btn-comics")
printComics.addEventListener("click", function(){
    const div = document.getElementById("container")

    listacomic.getListComic().forEach( item => {

        let comicCard = document.createElement("div")
        container.appendChild(comicCard)

        let portada = document.createElement("img")
        portada.src=item.getPortada()
        comicCard.appendChild(portada)

        let idComic = document.createElement("h2")
        idComic.innerText = item.getId()
        comicCard.appendChild(idComic)

        let titulo = document.createElement("h2")
        titulo.innerText= item.getTitulo()
        comicCard.appendChild(titulo)

        let serieComic = document.createElement("h3")
        serieComic.innerText = item.getSerie()
        comicCard.appendChild(serieComic)

        let paginas = document.createElement("h3")
        paginas.innerText= item.getPaginas()
        comicCard.appendChild(paginas)

        let creatorsList = document.createElement("ul")
        item.getCreadores().forEach(element => {
            let creador=document.createElement("li")
            creador.innerText = element.getFulllname()
            creatorsList.appendChild(creador)
        })
        comicCard.appendChild(creatorsList)
    })
})

    const printCreadores = document.getElementById("btn-creadores")
    printCreadores.addEventListener("click", function(){
        const contCreators = document.getElementById("divcreadores")

        listacreadores.getCreatorslist().forEach( item => {
            let creatorcard = document.createElement("div")
            contCreators.appendChild(creatorcard)
            
            let creatorName= document.createElement("h2")
            creatorName.innerText=item.getFulllname()
            creatorcard.appendChild(creatorName)
            
            let creatorid= document.createElement("h3")
            creatorid.innerText=item.getId()
            creatorcard.appendChild(creatorid)            
        })
        
    })

  