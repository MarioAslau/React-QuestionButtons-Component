import React, { Component } from 'react'
import './QuestionToggle.sass'

export default class QuestionToggle extends Component {

  state = {
    currentChoice: '',
    hadBeenTouched: false
  }

  onQuestionClick = (choice) => {
    const hadBeenTouched = this.state.hadBeenTouched

    this.setState({
      currentChoice: choice,
      hadBeenTouched: true
    })

    this.props.onToggle(choice === this.props.options.correctChoice, hadBeenTouched)
  }

  render() {
    const { options } = this.props
    const { currentChoice } = this.state

    return (
      <div className="question-toggle-container">
        <div className={"question-slider " + (currentChoice === options.choiceA ? 'question-slider-left' : 'question-slider-right')}/>
        <div onClick={() => this.onQuestionClick(options.choiceA)} className="question-slider-choice">
        {options.choiceA}
        </div>
        <div onClick={() => this.onQuestionClick(options.choiceB)} className="question-slider-choice">
          {options.choiceB}
        </div>
    </div>
    )
  }
}
