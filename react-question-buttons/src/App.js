import React, { Component } from 'react'
import { QuestionCard } from './components'
import './App.sass'

class App extends Component {
  state = {
    question: {
      text: "Who are Marvel heores?",
      options: [
        {
          choiceA: 'Spider-Man',
          choiceB: 'Batman',
          correctChoice: 'Spider-Man'
        },
        {
          choiceA: 'Joker',
          choiceB: 'Venom',
          correctChoice: 'Venom'
        },
        {
          choiceA: 'Wolverine',
          choiceB: 'Superman',
          correctChoice: 'Wolverine'
        },
        {
          choiceA: 'Question',
          choiceB: 'Ironman',
          correctChoice: 'Ironman'
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <QuestionCard question={this.state.question} />
      </div>
    );
  }
}

export default App;
