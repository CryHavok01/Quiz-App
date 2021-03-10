'use strict';

class Poof extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.reset();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h2>You're Yarael Poof!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img src="pics/Poof.png" className="img-fluid" alt="Yarael Poof" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>
                            Yarael Poof was a Jedi Master and had been a member of the Jedi High Council for over two centuries by the time of the Trade Federation blockade of Naboo.  The wise and kindly Quermian was opposed to violence of all kinds, and mastered using the force to manipulate the minds of adversaries as a means of ending conflict, instead of using his deadly lightsaber.  Poof sacrificed his life to prevent radicals from destroying the planet Coruscant.  After being stabbed in the heart by one of the radicals, his final act was to use the force to deactivat their planet killing weapon.  He died five years before the start of the Clone Wars, which he would surely have opposed.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-warning btn-block" onClick={this.handleClick}>
                            Start Over
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}