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
                            A flying Saucer crash lands in your back yard.  What do you do?
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="pics/ufo.jpg" alt="Flying saucer" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Study the ship's engines and unlock the secrets of interstellar travel</p>
                        <button type="button" value="2" onClick={this.handleClick}>
                            Learn to Fly
                        </button>
                    </div>
                    <div className="col">
                        <p>Drag the ship's pilot out of the wrecakge, and nurse them back to health.</p>
                        <button type="button" value="1" onClick={this.handleClick}>
                            Rescue Survivor
                        </button>
                    </div>
                    <div className="col">
                        <p>Hire an agent and start making plans to turn your good luck into tv appearances, a book deal, maybe even a biopic starring one of the Chrises.</p>
                        <button type="button" value="5" onClick={this.handleClick}>
                            Cash In
                    </button>
                    </div>
                    <div className="col">
                        <p>Scour the ship for lasers, phasers, tasers, and any other awesome alien weapons to play with.</p>
                        <button type="button" value="4" onClick={this.handleClick}>
                            Pew Pew
                    </button>
                    </div>
                    <div className="col">
                        <p>Call a lawyer and see if you can sue an alien for ruining the garden you just finished planting.</p>
                        <button type="button" value="3" onClick={this.handleClick}>
                            Seek Damages
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}