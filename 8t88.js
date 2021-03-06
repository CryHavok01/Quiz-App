'use strict';

class Eighty extends React.Component {
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
                        <h2>You're 8T88</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img src="pics/8t88.png" className="img-fluid" alt="8T88" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>
                            8T88 was an administrative droid who harbored an intense hatred for all organic life.  He abandoned his original programming and became an information broker on the crime infested moon Nar Shaddaa.  He was very successful and amassed a large fortune, although he quickly developed a reputation for blackmailing, backstabbing, and betraying his organic clients.  A few years after the fall of the Empire, 8T88 was hired by the Dark Jedi Jerec to uncover the location of the legendary Valley of the Jedi.  Believing that former Rebel agent Kyle Katarn could provide the information he needed, 8T88 lured Katarn into a trap by promising information about the unsolved murder of Katarn's father.  Unfortunately for 8T88, Katarn survived the trap and escaped, setting out to beat Jerec to the Valley of the Jedi.  For this failure, Jerec had 8T88 deactivated and dismantled.
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