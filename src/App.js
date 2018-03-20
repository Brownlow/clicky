import React, { Component } from 'react';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Gameboard from './components/Gameboard/Gameboard';
import Gamecard from './components/Gamecard/Gamecard';
import cards from './cards.json';
import './App.css';

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on The Dude, but don't click on one more than once!";

class App extends Component{

  state = {
    cards,
    correctGuesses,
    bestScore,
    clickMessage
  }

  beenClicked = (id) => {
    // Make a copy of the state cards array to work with
    const cards = this.state.cards;

    // Filter for the clicked match
    const isClicked = cards.filter(card => card.id === id);

    // If the matched image's clicked value is already true, 
    // do the game over actions
    if (isClicked[0].clicked){

        console.log ("Correct Guesses: " + correctGuesses);
        console.log ("Best Score: " + bestScore);

        correctGuesses = 0;
        clickMessage = "Dang! You already clicked on that one! Now you have to start over!"

        for (let i = 0 ; i < cards.length ; i++){
            cards[i].clicked = false;
        }

        this.setState({clickMessage});
        this.setState({correctGuesses});
        this.setState({cards});

    // Otherwise, if clicked = false, and the user hasn't finished
    } else if (correctGuesses < 11) {

        // Set its value to true
        isClicked[0].clicked = true;

        // increment the appropriate counter
        correctGuesses++;
        
        clickMessage = "Great! You haven't click on that one yet! Keep going!";

        if (correctGuesses > bestScore){
            bestScore = correctGuesses;
            this.setState({ bestScore });
        }

        // Shuffle the array to be rendered in a random order
        cards.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.matches equal to the new matches array
        this.setState({ cards });
        this.setState({correctGuesses});
        this.setState({clickMessage});
    } else {
        // Set its value to true
        isClicked[0].clicked = true;

        // restart the guess counter
        correctGuesses = 0;

        // Egg on the user to play again
        clickMessage = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
        bestScore = 12;
        this.setState({ bestScore });
        
        for (let i = 0 ; i < cards.length ; i++){
            cards[i].clicked = false;
        }

        // Shuffle the array to be rendered in a random order
        cards.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.matches equal to the new matches array
        this.setState({ cards });
        this.setState({correctGuesses});
        this.setState({clickMessage});

    }
  }

  render(){
    return (
      <div>
        <Header
        correctGuesses={correctGuesses}
        bestScore={bestScore}
        clickMessage={clickMessage}
        >
        </Header> 
        <Jumbotron/>
        <Gameboard>
        <div className="row">
          {this.state.cards.map(card =>
            <div className="col-3">
              <Gamecard
                id={card.id}
                key={card.id}
                image={card.image}
                beenClicked={this.beenClicked}
              />
            </div>
          )}  
        </div> 
      </Gameboard>  
      </div>
    )
  }
}

export default App;
