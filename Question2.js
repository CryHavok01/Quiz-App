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
            <button type="button" value="2" onClick={this.handleClick}>
                2
            </button>
        )
    }
}