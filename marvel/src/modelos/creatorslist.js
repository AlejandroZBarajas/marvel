export class CreatorList{
    #listacreadores=[]

    addCreator(creador){this.#listacreadores.push(creador)}
    getCreatorslist(){return this.#listacreadores}
}