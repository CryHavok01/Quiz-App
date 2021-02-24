'use strict';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const points = Number(e.target.value);
        this.props.addScore(points);
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
                <Results
                    score={this.props.score}
                    reset={this.props.reset}
                />
            )
        }
    }
}