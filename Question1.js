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
                    <div className="col text-center">
                        <img src="pics/Logo.svg" className="img-fluid" alt="Star Wars Logo" />
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="4" onClick={this.handleClick}>
                            The Mandalorian
                        </button>
                    </div>
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="1" onClick={this.handleClick}>
                            The Last Jedi
                        </button>
                    </div>
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="5" onClick={this.handleClick}>
                            Revenge of the Sith
                        </button>
                    </div>
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="3" onClick={this.handleClick}>
                            Rogue One
                        </button>
                    </div>
                    <div className="col-md-2 d-flex align-items-center question">
                        <button type="button" className="btn btn-warning btn-block" value="2" onClick={this.handleClick}>
                            The Empire Strikes Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}