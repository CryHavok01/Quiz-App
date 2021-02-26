'use strict';

class Question5 extends React.Component {
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
                    Adventure. Excitement. A Jedi craves not these things.  What do you crave?
                </h3>
                <div>
                    <button type="button" value="1" onClick={this.handleClick}>
                        Serenity
                    </button>
                    <button type="button" value="2" onClick={this.handleClick}>
                        Knowledge
                    </button>
                    <button type="button" value="3" onClick={this.handleClick}>
                        Excitement
                    </button>
                    <button type="button" value="4" onClick={this.handleClick}>
                        Adventure
                    </button>
                    <button type="button" value="5" onClick={this.handleClick}>
                        Power
                    </button>
                </div>
            </div>
        )
    }
}