'use strict';

class Question3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const points = Number(e.target.value);
        this.props.addScore(points);
        this.props.nextQuestion();
    }

    render() {
        return (
            <div>
                <h3>
                    When you were a kid, what did you want to be when you grew up?
                </h3>
                <div>
                    <button type="button" value="1" onClick={this.handleClick}>
                        Fire Fighter
                    </button>
                    <button type="button" value="2" onClick={this.handleClick}>
                        Scientist
                    </button>
                    <button type="button" value="3" onClick={this.handleClick}>
                        Astronaut
                    </button>
                    <button type="button" value="4" onClick={this.handleClick}>
                        President
                    </button>
                    <button type="button" value="5" onClick={this.handleClick}>
                        Accountant
                    </button>
                </div>
            </div>
        )
    }
}