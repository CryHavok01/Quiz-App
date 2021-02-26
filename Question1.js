'use strict';

class Question1 extends React.Component {
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
                <h2>
                    What's your favorite Star War?
                </h2>
                <div>
                    <button type="button" value="1" onClick={this.handleClick}>
                        The Last Jedi
                    </button>
                    <button type="button" value="2" onClick={this.handleClick}>
                        The Empire Strikes Back
                    </button>
                    <button type="button" value="3" onClick={this.handleClick}>
                        Rogue One
                    </button>
                    <button type="button" value="4" onClick={this.handleClick}>
                        The Mandalorian
                    </button>
                    <button type="button" value="5" onClick={this.handleClick}>
                        Revenge of the Sith
                    </button>
                </div>
            </div>
        )
    }
}