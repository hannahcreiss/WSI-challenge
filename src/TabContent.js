import React from 'react';
import './App.css';

var Header = React.createClass ({
  getInitialState () {
    return {
      text: " "
    }
  },
  render () {
    return (
      <div className="banner text-center">
        <h1>{this.props.text}</h1>
      </div>
    )
  }
})

var BodyContent = React.createClass ({
  getDefaultProps() {
    return {
      queue: [],
      index: 0,
      bedding: false,
      bath: false,
      rooms: false,
      kitchen: false,
      living: false,
      cars: false,
      birds: false,
      planes: false,
      img_1: './images/question-mark.png',
      img_2: './images/question-mark.png',
      img_3: './images/question-mark.png',
      img_4: './images/question-mark.png',
    }
  },
  getInitialState () {
    return {
      queue: this.props.queue,
      index: this.props.index,
      bedding: this.props.bedding,
      bath: this.props.bath,
      rooms: this.props.rooms,
      kitchen: this.props.kitchen,
      living: this.props.living,
      cars: this.props.cars,
      birds: this.props.birds,
      planes: this.props.planes,
      img_1: this.props.img_1,
      img_2: this.props.img_2,
      img_3: this.props.img_3,
      img_4: this.props.img_4
    }
  },
  handleInputChange(event) {

    var target = event.target;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    var name = target.name;
    var index = this.state.index > 3 ? 1 : this.state.index + 1;
    var image_key = 'img_' + index;

    this.state.queue.push(name)

    if (this.state.queue.length > 4 ) {
      var removed = this.state.queue.shift();
    }

    this.setState({
      index : index,
      [name]: value,
      [removed]: false,
      [image_key]: './images/' + name + '.png'
    });
  },
  render() {
    return (
    <div className="body-content">
      <div className="sidebar col-xs-2">
        <h3>Categories</h3>
        <ul className="categories">
          <li>Bedding <input type="checkbox" name="bedding" checked={this.state.bedding} onChange={this.handleInputChange} /></li>
          <li>Bath <input type="checkbox" name="bath" checked={this.state.bath} onChange={this.handleInputChange} /></li>
          <li>Rooms <input type="checkbox" name="rooms" checked={this.state.rooms} onChange={this.handleInputChange} /></li>
          <li>Kitchen <input type="checkbox" name="kitchen" checked={this.state.kitchen} onChange={this.handleInputChange} /></li>
          <li>Living <input type="checkbox" name="living" checked={this.state.living} onChange={this.handleInputChange} /></li>
          <li>Cars <input type="checkbox" name="cars" checked={this.state.cars} onChange={this.handleInputChange} /></li>
          <li>Birds <input type="checkbox" name="birds" checked={this.state.birds} onChange={this.handleInputChange} /></li>
          <li>Planes<input type="checkbox" name="planes" checked={this.state.planes} onChange={this.handleInputChange} /></li>
        </ul>
        <h3>Pages</h3>
        <ul className="categories">
          <li>Bedding</li>
          <li>Bath</li>
          <li>Rooms</li>
          <li>Kitchen</li>
          <li>Living</li>
          <li>Cars</li>
          <li>Birds</li>
          <li>Planes</li>
        </ul>
      </div>
      <div className="right-content col-xs-10">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget erat nisi. Duis in nunc dolor. Phasellus ut quam non urna vehicula placerat at sed augue. Ut iaculis hendrerit tortor, non commodo tellus blandit sed. Nam risus dui, rhoncus vel eleifend quis, pellentesque eget erat. Cras venenatis lacus et urna porttitor, ac tincidunt leo semper. Suspendisse pretium semper erat tincidunt volutpat. Pellentesque arcu purus, eleifend cursus dignissim a, maximus quis leo.</p>
        <div className="images">
          <div className="image one"><img src={this.state.img_1} alt="one"/></div>
          <div className="image two"><img src={this.state.img_2} alt="two"/></div>
          <div className="image three"><img src={this.state.img_3} alt="three"/></div>
          <div className="image four"><img src={this.state.img_4} alt="four"/></div>
        </div>
        <div className="callout left">
          Nulla rhoncus leo ut arcu tristique pellentesque. Proin magna nisi, vehicula vel molestie in, placerat convallis dui. Ut quis sem ac mi lacinia hendrerit sed id nulla. Integer eget libero consectetur, sagittis libero eleifend, malesuada risus. Etiam accumsan odio vel ante pellentesque, ac vestibulum turpis finibus. Aenean convallis metus mi, sit amet pretium lectus gravida nec. Suspendisse potenti. Aliquam sed ligula ut mi blandit egestas a eget nisi. Fusce iaculis auctor sem sed faucibus.
        </div>
        <div className="callout right">
          Nulla rhoncus leo ut arcu tristique pellentesque. Proin magna nisi, vehicula vel molestie in, placerat convallis dui. Ut quis sem ac mi lacinia hendrerit sed id nulla. Integer eget libero consectetur, sagittis libero eleifend, malesuada risus. Etiam accumsan odio vel ante pellentesque, ac vestibulum turpis finibus. Aenean convallis metus mi, sit amet pretium lectus gravida nec. Suspendisse potenti. Aliquam sed ligula ut mi blandit egestas a eget nisi. Fusce iaculis auctor sem sed faucibus.
        </div>
      </div>
    </div>
    )
  }
})

module.exports = {
  header: Header,
  bodyContent: BodyContent
};
