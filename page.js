'use strict';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const value = (e.target.value);
    const points = Number(value);
    this.props.addScore(points);
}

  render() {
    return (
      <button type="button" value="3" onClick={this.handleClick}>
        3
      </button>
    )
  }
}