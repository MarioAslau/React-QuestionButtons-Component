import React, { Component } from 'react'
import QuestionToggle from './QuestionToggle'
import "./QuestionCard.sass"

export default class QuestionCard extends Component {

	state = {
		count: null
	}

	onToggle = (correct, hadBeenTouched) => {
		let currentCount = this.state.count

		if (correct) {
			currentCount += 1
		} else if (hadBeenTouched) {
			this.state.count > 0 ? currentCount -= 1 : currentCount = 0
		}

		this.setState({count: currentCount})
	}

	getCardStyle = (count, maxCount) => {
		let cardClassNames = "question-card "

		switch (count) {
			case 0:
				cardClassNames = cardClassNames + "question-card-incorrect" 
				break;
			case maxCount:
				cardClassNames = cardClassNames + "question-card-correct"
				break;
			default:
				cardClassNames = cardClassNames + "question-card-null"
				break;
		}

		return cardClassNames
	}

	render() {
		const { question } = this.props
		const { count } = this.state
		
		const maxCount = question.options.length

    return (
      <div className={this.getCardStyle(count, maxCount)}> 
        <p className="question-header">{question.text}</p>

				{
					question.options.map((item, index) => (
						<QuestionToggle key={index} options={item} onToggle={this.onToggle}/>
					))
				}

				<p className="question-text">
					{
						count === maxCount ? 'The answer is correct.' : 'The answer is incorrect.'
					}
				</p>
				
		
      </div>
    )
  }
}
