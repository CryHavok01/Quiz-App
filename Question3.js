'use strict';

class Question3 extends React.Component {
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
            <button type="button" value="3" onClick={this.handleClick}>
                3
            </button>
        )
    }
}