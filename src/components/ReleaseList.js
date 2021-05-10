import Releases from './Releases';



const ReleaseList = ({films}) => {
console.log(films)
    const eachMovie = films.map(film =>{
        return (<Releases movie={film.name} key ={film.id}/>)
        })

    return (
        <>
        <div className="releaseBox">
        <h2>Up coming Film Releases for Uk</h2>

        <ul className="filmsRelease">
        {eachMovie}
        </ul>
        <div className="upcomingRelese">
        <h3><a href="https://www.imdb.com/calendar/?region=gb"> View more upcoming releases >> </a>
        </h3>
        </div>
        </div>
        </>
    )

}


export default ReleaseList;