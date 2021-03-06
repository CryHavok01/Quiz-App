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
                            Question 3: <br></br>When you were a kid, what did you want to be when you grew up?
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img src="pics/jobs.png" className="img-fluid" alt="Cartoon people with jobs" />
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="2" onClick={this.handleClick}>
                            Scientist
                        </button>
                    </div>
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="4" onClick={this.handleClick}>
                            President
                        </button>
                    </div>
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="5" onClick={this.handleClick}>
                            Accountant
                        </button>
                    </div>
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="3" onClick={this.handleClick}>
                            Astronaut
                        </button>
                    </div>
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="1" onClick={this.handleClick}>
                            Fire Fighter
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}