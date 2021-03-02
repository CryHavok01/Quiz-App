'use strict';

const e = React.createElement;

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            question: 1,
            result: null,
        };
        this.addScore = this.addScore.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.reset = this.reset.bind(this);
    }

    addScore(points) {
        let currScore = this.state.score;
        let newScore = currScore + points;
        this.setState({ score: newScore });
    }

    nextQuestion() {
        let currQ = this.state.question;
        let nextQ = currQ + 1;
        this.setState({question: nextQ});
    }

    reset() {
        this.setState({
            score: 0,
            question: 1
        })
    }
    render() {

        return (
            <div>
                <Page
                    addScore={this.addScore}
                    nextQuestion={this.nextQuestion}
                    reset={this.reset}
                    question={this.state.question}
                    score={this.state.score}
                />
            </div>
        );
    }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(Container), domContainer);
