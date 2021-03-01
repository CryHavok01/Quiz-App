'use strict';

class Ulic extends React.Component {
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
                <h2>You're Ulic Qel Droma!</h2>
                <p>
                    Ulic Qel Droma was a Jedi Knight who lived and died around 4000 years before Luke Skywalker was born.  
                </p>
                <button type="button" onClick={this.handleClick}>
                    Start Over
                </button>
            </div>
        )
    }
}