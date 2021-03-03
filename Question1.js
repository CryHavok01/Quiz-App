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
                <div className="row">
                    <div className="col">
                        <h3>
                            What's your favorite Star War?
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="pics/Logo.svg" alt="Star Wars Logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" value="4" onClick={this.handleClick}>
                            The Mandalorian
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" value="1" onClick={this.handleClick}>
                            The Last Jedi
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" value="5" onClick={this.handleClick}>
                            Revenge of the Sith
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" value="3" onClick={this.handleClick}>
                            Rogue One
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" value="2" onClick={this.handleClick}>
                            The Empire Strikes Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}