var React = require('react')
var ReactDOM = require('react-dom');
var Header = require('./TabContent').header;
var BodyContent = require('./TabContent').bodyContent;
import './App.css';

var Tabs = React.createClass ({
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  },
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li className={activeClass}
           key={index}>
          <a href="#"
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs-labels text-right">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  },
  render() {
    return (
      <div className="tabs">
        <div className="tabs-content">
          {this._renderTitles()}
          {this.props.children[this.state.selected]}
        </div>
      </div>
    );
  }
});

var Pane = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var App = React.createClass({
  render() {
    return (
      <div>
        <Tabs selected={2}>
          <Pane label="home">
            <Header text="Home"/>
          </Pane>
          <Pane label="about">
            <Header text="About"/>
          </Pane>
          <Pane label="take the challenge">
            <Header text="Welcome to the WSI markup challenge. Good luck!"/>
            <div className="body-content">
              <BodyContent />
            </div>
          </Pane>
        </Tabs>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('.body-container'));
