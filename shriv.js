'use strict';

class Shriv extends React.Component {
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
                        <h2>You're Shriv Suurgav</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="pics/Shriv.jpg" className="img-fluid" alt="Shriv Suurgav" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>
                            Shriv Suurgav was a soldier and strategist for the Rebel Alliance, who fought in several key battles of the Galactic Civil War.  Although he had a constantly sarcastic demeanor and cynical attitude, he was nevetherless a loyal soldier and reliable friend to General Lando Calrissian and other notable Rebels.  He fought in the liberation of Sullust and at the Battle of Jakku, although he spent as much time complaining to his comrades as he did fighting the Empire.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleClick}>
                            Start Over
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}