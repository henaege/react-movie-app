import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './Poster'

class App extends Component {
  constructor(props){
    super(props);
    // in order to define a state variable, it goes in the constructor. It is defined as an object on this.state.
    // This replaces getInitialState
    this.state = {
      moviePosters: []
    }
  }
  componentDidMount() {
    console.log("I'm in the DOM")
    var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'

    $.getJSON(url, (movieData)=>{
      console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      })
    })
}

  render() {

    var postersArray = [];
    this.state.moviePosters.map((poster, index)=>{
      // console.log(poster);
      postersArray.push(<Poster poster={poster} key={index} />)
    })

    // console.log(this.movieData.results)


    return (
      <div className="App">
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <ul id="dropdown2" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <ul id="dropdown3" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" placeholder="Search" />
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
            <a href="#" className="center brand-logo">Cinematic</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a className="dropdown-button" data-activates="dropdown1" href="sass.html">Genres<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a className="dropdown-button" data-activates="dropdown2" href="badges.html">Decades<i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a className="dropdown-button" data-activates="dropdown3" href="collapsible.html">Account<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
        <div className="main-body">
          <div className="row">
            {postersArray}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
