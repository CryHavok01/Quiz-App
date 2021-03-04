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
                <div className="row">
                    <div className="col">
                        <h3>
                            Adventure. Excitement. A Jedi craves not these things.  What do you crave?
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img src="pics/jedi.jpg" className="img-fluid" alt="Jedi Knights" />
                    </div>
                </div>
                <div className="row">
                    <div className="col question">
                        <button type="button" className="btn btn-primary btn-block" value="5" onClick={this.handleClick}>
                            Power
                        </button>
                    </div>
                    <div className="col question">
                        <button type="button" className="btn btn-primary btn-block" value="1" onClick={this.handleClick}>
                            Serenity
                        </button>
                    </div>
                    <div className="col question">
                        <button type="button" className="btn btn-primary btn-block" value="3" onClick={this.handleClick}>
                            Excitement
                        </button>
                    </div>
                    <div className="col question">
                        <button type="button" className="btn btn-primary btn-block" value="2" onClick={this.handleClick}>
                            Knowledge
                        </button>
                    </div>
                    <div className="col question">
                        <button type="button" className="btn btn-primary btn-block" value="4" onClick={this.handleClick}>
                            Adventure
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}