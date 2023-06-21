import './index.css'
import { useEffect,useState } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

//f9ddca1e
const API_URL="http://omdbapi.com?apikey=f9ddca1e";
const App = () => {
  
  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
 
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    
    <div className="m-0 border-0 box-border bg-gray-900">
     
    {/*This is the header of the website*/}
    <div className="p-16 flex justify-center items-center flex-col">
      <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500">MovieMania</h1>

      
      {/*This is the search bar which contains the input and the logo for search bar
      Here we will enter the movie name we have to search for*/}
      <div className="w-71 mx-auto my-16 mb-8 flex items-center justify-center p-6 rounded-3xl bg-gray-900 shadow-md">
      <input className="flex-1 border-none text-lg font-raleway font-medium pr-4 outline-none text-gray-400 bg-gray-900"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img className="w-8 h-8 cursor-pointer"
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      
      {/*This is the container for the movies which will be displayed after the search*/}
      {movies?.length > 0 ? (
        <div className="w-full mt-12 flex justify-center items-center flex-wrap">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
          
        </div>
      ) : (
        <div className="w-full mt-12 flex justify-center items-center">
          <h2 className="text-lg text-orange-400 font-raleway">Following movie is not in our database XD!</h2>
        </div>
      )}


      
    </div>
    
    </div>
  );
}

export default App;

/*                          CODE SUMMARY
  The searchMovies function is an asynchronous function that takes a title parameter. 
  It makes a GET request to the OMDB API by concatenating the API URL with the search query title. 
  The response is then converted to JSON format using response.json(). The resulting data is set using the setMovies function, which updates the movies state with the search results.

  These lines define two state variables using the useState hook. searchTerm represents the current search term entered in the search bar, 
  and setSearchTerm is a function used to update its value. movies represents the array of movies fetched from the API,
  and setMovies is a function used to update this state.

  onClick attribute defines the event handler function that gets triggered when the image is clicked.
  It calls the searchMovies function, passing the current value of searchTerm as the search term.

  Lastly the map function iterates over each movie in the movies array using the map function and renders a MovieCard component for each movie. 
  The movie object is passed as a prop to the MovieCard component using the movie={movie} syntax.

 */


/*props allow you to pass dynamic data to react components
A state tells the current condition of a react component and it is solely maintained by the component 
whenever you call something as a function and it uses the state, it is called a hook 
Rule of thumb is to never modify the state manually
 */