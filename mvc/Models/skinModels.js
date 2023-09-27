// const skin={
//     name:"",
//     description:"",
//     rare:"",
//     seeInfo:function(){
//         return`nome: ${this.name} Descrição: ${this.description} rare: ${this.rare}`
//     },
//     toJSON:function(){
//         return{
//             "name":this.name,
//             "description":this.description,
//             "rare":this.rare
//         }
//     }
// }
// module.exports=skin

class Skin {

    categoriaSkin
    nomeSkin
    descSkin
    generoSkin
    valorSkin
    raridadeSkin
    foto1Skin
    foto2Skin

    constructor(){
    }

}

const skins = new Skin()

module.exports = Skin;