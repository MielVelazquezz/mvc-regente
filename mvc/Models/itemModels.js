const Item = {

    name:"",
    description:"",
    seeInfo:function(){

        return `Name: ${this.name} Description: ${this.description}`

    },

    toJSON: function(){

        return{
        "name":this.name,
        "description":this.description
        }

    }

}

module.exports = Item;