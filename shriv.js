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
                <h2>You're Shriv Suurgav</h2>
                <img src="pics/Shriv.jpg" alt="Shriv Suurgav" />
                <p>
                    Shriv Suurgav was a soldier and strategist for the Rebel Alliance, who fought in several key battles of the Galactic Civil War.  Although he had a constantly sarcastic demeanor and cynical attitude, he was nevetherless a loyal soldier and reliable friend to General Lando Calrissian and other notable Rebels.  He fought in the liberation of Sullust and at the Battle of Jakku, although he spent as much time complaining to his comrades as he did fighting the Empire.
                </p>
                <button type="button" onClick={this.handleClick}>
                    Start Over
                </button>
            </div>
        )
    }
}