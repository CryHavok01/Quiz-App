'use strict';

class Question4 extends React.Component {
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
                            Question 4:<br></br>A flying Saucer crash lands in your back yard.  What do you do?
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img src="pics/ufo.jpg" className="img-fluid" alt="Flying saucer" />
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-md-2 d-flex flex-column justify-content-between question">
                        <p>Study the ship's engines and unlock the secrets of interstellar travel</p>
                        <button type="button" className="btn btn-warning btn-block" value="2" onClick={this.handleClick}>
                            Learn to Fly
                        </button>
                    </div>
                    <div className="col-md-2 d-flex flex-column justify-content-between question">
                        <p>Drag the ship's pilot out of the wrecakge, and nurse them back to health.</p>
                        <button type="button" className="btn btn-warning btn-block" value="1" onClick={this.handleClick}>
                            Rescue Survivor
                        </button>
                    </div>
                    <div className="col-md-2 d-flex flex-column justify-content-between question">
                        <p>Hire an agent and start making plans to turn your good luck into tv appearances, a book deal, maybe even a biopic starring one of the Chrises.</p>
                        <button type="button" className="btn btn-warning btn-block" value="5" onClick={this.handleClick}>
                            Cash In
                    </button>
                    </div>
                    <div className="col-md-2 d-flex flex-column justify-content-between question">
                        <p>Scour the ship for lasers, phasers, tasers, and any other awesome alien weapons to play with.</p>
                        <button type="button" className="btn btn-warning btn-block" value="4" onClick={this.handleClick}>
                            Pew Pew
                    </button>
                    </div>
                    <div className="col-md-2 d-flex flex-column justify-content-between question">
                        <p>Call a lawyer and see if you can sue an alien for ruining the garden you just finished planting.</p>
                        <button type="button" className="btn btn-warning btn-block" value="3" onClick={this.handleClick}>
                            Seek Damages
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}