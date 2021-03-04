'use strict';

class Question2 extends React.Component {
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
                            There's one donut left in the breakroom at work.  You've had one already, and you know some of your coworkers haven't been to the breakroom yet, but you're still hungry.  What do you do?
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img src="pics/donut.jpg" className="img-fluid" alt="Last donut in the box" />
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-md-2 d-flex question">
                        <p>Grab the donut and slink back to your desk where no one can see your shame</p>
                        <button type="button" className="btn btn-primary btn-block align-self-end" value="3" onClick={this.handleClick}>
                            Eat in Shame
                        </button>
                    </div>
                    <div className="col-md-2 question">
                        <p>Eat the donut happily, and then appologize when someone realizes they're all gone</p>
                        <button type="button" className="btn btn-primary btn-block align-self-end" value="4" onClick={this.handleClick}>
                            Eat and Say Sorry
                        </button>
                    </div>
                    <div className="col-md-2 question">
                        <p>Leave the donut alone and let someone else eat it.</p>
                        <button type="button" className="btn btn-primary btn-block align-self-end" value="1" onClick={this.handleClick}>
                            Leave It
                        </button>
                    </div>
                    <div className="col-md-2 question">
                        <p>Eat the donut, but buy a box of donuts on the way into work tomorrow</p>
                        <button type="button" className="btn btn-primary btn-block align-self-end" value="2" onClick={this.handleClick}>
                            Buy Donuts
                        </button>
                    </div>
                    <div className="col-md-2 question">
                        <p>Pull the fire alarm so no one sees you take the donut.  Then take a nap in your car while the Fire Department clears the building.</p>
                        <button type="button" className="btn btn-primary btn-block align-self-end" value="5" onClick={this.handleClick}>
                            Create a Diversion
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}