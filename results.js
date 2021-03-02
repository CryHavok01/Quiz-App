'use strict';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.score < 8) {
            return (
                <Poof reset={this.props.reset} />
            )
        } else if (this.props.score < 13){
            return (
                <Piggy reset={this.props.reset} />
            )
        } else if (this.props.score < 18){
            return (
                <Shriv reset={this.props.reset} />
            )
        } else if (this.props.score < 23){
            return (
                <Ulic reset={this.props.reset} />
            )
        } else {
            return (
                <Eighty reset={this.props.reset} />
            )
        }
    }
}