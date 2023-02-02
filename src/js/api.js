export default class API {
   async getCharacter(id) {
     const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
     const data = await response.json()
     return data
     // .then((response) => response.json())
     //   .then((data) => data)
   }
 }


/*export default class API {
 getCharacter() {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=> response.json())
    .then ((data) => console.log(data))
 }
}*/
