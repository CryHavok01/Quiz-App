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
                <div className="row">
                    <div className="col">
                        <h3>
                            When you were a kid, what did you want to be when you grew up?
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="pics/jobs.png" alt="Cartoon people with jobs" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block" value="2" onClick={this.handleClick}>
                            Scientist
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block" value="4" onClick={this.handleClick}>
                            President
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block" value="5" onClick={this.handleClick}>
                            Accountant
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block" value="3" onClick={this.handleClick}>
                            Astronaut
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block" value="1" onClick={this.handleClick}>
                            Fire Fighter
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}