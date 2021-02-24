'use strict';

const e = React.createElement;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        score: 0,
        question: 0,
        result: null,
    };
    this.addScore = this.addScore.bind(this);
  }

  addScore(points) {
      let currScore = this.state.score;
      let newScore = currScore + points;
      this.setState({score: newScore});
  }

  render() {

    return (
        <div>  
            <Page addScore={this.addScore} />
            {this.state.score}
        </div>
    );
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(Container), domContainer);
