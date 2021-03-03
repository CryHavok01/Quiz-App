'use strict';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.question === 1) {
            return (
                <Question1
                    addScore={this.props.addScore}
                    nextQuestion={this.props.nextQuestion}
                />
            )
        } else if (this.props.question === 2) {
            return (
                <Question2
                    addScore={this.props.addScore}
                    nextQuestion={this.props.nextQuestion}
                />
            )
        } else if (this.props.question === 3) {
            return (
                <Question3
                    addScore={this.props.addScore}
                    nextQuestion={this.props.nextQuestion}
                />
            )
        } else if (this.props.question === 4) {
            return (
                <Question4
                    addScore={this.props.addScore}
                    nextQuestion={this.props.nextQuestion}
                />
            )
        } else if (this.props.question === 5) {
            return (
                <Question5
                    addScore={this.props.addScore}
                    nextQuestion={this.props.nextQuestion}
                />
            )
        } else if (this.props.question === 6) {
            return (
                <Results
                    score={this.props.score}
                    reset={this.props.reset}
                />
            )
        }
    }
}