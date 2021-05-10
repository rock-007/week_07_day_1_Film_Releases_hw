import Releases from './Releases';



const ReleaseList = ({films}) => {
console.log(films)
    const eachMovie = films.map(film =>{
        return (<Releases movie={film.name} key ={film.id}/>)
        })

    return (
        <>
        <ul>
        {eachMovie}
        </ul>
        </>
    )

}


export default ReleaseList;