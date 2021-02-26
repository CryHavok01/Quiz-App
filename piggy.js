'use strict';

class Piggy extends React.Component {
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
                <h2>You're Voort saBinring, aka Piggy!F</h2>
                <p>
                    Voort saBinring was a Gamorean X-Wing pilot who fought for the New Republic towards the end of the Galactic Civil War.  Although Gamoreans have limited mental capacity, Voort was enslaved by the Empire and subjected to unethical medical experiments that allowed his brain to function at the level of a supercomputer.  He escaped from the Empire, and joined the Rebel Alliance shortly before the death of the Emperor at the Battle of Endor.  His enhanced mind gave him both a mastery over battle tactics and enhanced reflexes that made him a natural fighter pilot.  He was assigned to Wraith Squadron under the command of Wedge Antilles and Wes Janson, where his squadmates gave him the nickname "Piggy."  He was a crucial part of many victories over the Imperial Remnant, and he became a professor of mathematics after retiring from military service.
                </p>
                <button type="button" onClick={this.handleClick}>
                    Start Over
                </button>
            </div>
        )
    }
}