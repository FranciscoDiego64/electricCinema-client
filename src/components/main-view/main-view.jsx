import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
        {
          _id: "636182c12cb805d8dc27f405",
          Title: "Melancholia",
          Description: 'The lives of sisters Justine and Claire get entangled when they discover that Earth is about to collide with an enormous planet called Melancholia.',
          Genre: {
            Name: 'Drama',
            Description: 'In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
          },
          Director: {
            Name: 'Lars von Trier',
            Bio: 'Lars von Trier is a Danish film director and screenwriter, initially an actor and lyricist, with a controversial career spanning more than four decades.',
            Birth: '1956-04-30'
          },
          ImagePath: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJAeqv-xAoq3VmQ2RkG15z-KlHt8Q-mWjnDQ8uW68ra9ZB2QKn',
          Featured: true
        },
        {
          _id: "63639b1e472b628329f43e80",
          Title: 'Unglourious Basterds',
          Description: 'A few Jewish soldiers are on an undercover mission to bring down the Nazi government and put an end to the war. Meanwhile, a woman wants to avenge the death of her family from a German officer.',
          Genre: {
            Name:  'Action',
            Description: 'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.'
          },
          Director: {
            Name: 'Quentin Tarantino',
            Bio: 'Quentin Jerome Tarantino is an American filmmaker, author, and actor. His films are characterized by frequent references to popular culture and film genres, non-linear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, cameos and ensemble casts.',
            Birth: '1963-03-27'
          },
          ImagePath: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvl1IAwSys6SpV0QzocNFln0PQSwod5gBsdJRX5Tj98vwyFxal',
          Featured: true
        },

        {
          _id: "63639bb2472b628329f43e81",
          Title: 'Burn After Reading',
          Description: 'Two gym employees chance upon a CD containing the memoirs of a CIA agent. They decide to sell it back to him, failing which they plan to sell it to the Russian embassy.', 
          Genre: {
            Name: 'Comedy',
            Description: 'Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.',
          },
          Director: {
            Name: 'Ethan Coen',
            Bio: 'Ethan Coen is an American filmmaker who regularly collaborates with his brother Joel Coen', 
            Birth: '1957-09-21',
          },
          ImagePath: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSueapOLONrQnL75L8exYbizEdyeJ9cyCkwKbSivxXPsF1BcJWB',
          Featured: true
        },
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }


  render() {
    const { movies, selectedMovie } = this.state;


    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}




{/*
  render() {
    return (
        <div classname='main-view'>
            <div>Inception</div>
            <div>The Shawshank Redemption</div>
            <div>Gladiator</div>
        </div>
    );
  }  
} 
*/}
