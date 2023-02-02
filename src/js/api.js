export default class API {
 getCharacter() {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=> response.json())
    .then ((data) => console.log(data))
 }
}
