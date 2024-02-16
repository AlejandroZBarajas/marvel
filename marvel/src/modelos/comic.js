export class Comic{
    #id
    #titulo
    #serie
    #portada
    #paginas
    #listaCreadores=[]

    #urlCreadores

    setId(id){this.#id = id}
    getId(){return this.#id}

    setTitulo(titulo){this.#titulo = titulo}
    getTitulo(){return this.#titulo}

    setSerie(serie){this.#serie = serie}
    getSerie(){return this.#serie}

    setPaginas(paginas){ this.#paginas = paginas}
    getPaginas(){return this.#paginas}

    setUrlCreadores(urlCreadores){this.#urlCreadores=urlCreadores}
    getUrlCreadores(){return this.#urlCreadores}

    setPortada(portada){this.#portada = portada}
    getPortada(){return this.#portada}

    addCreador(creador){this.#listaCreadores.push(creador)}
    getCreadores(){return this.#listaCreadores}    
}