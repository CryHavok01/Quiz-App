'use strict';

class Results extends React.Component {
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
                You're a number!
            <button type="button" onClick={this.handleClick}>
                    Start Over
                </button>
            </div>
        )
    }
}