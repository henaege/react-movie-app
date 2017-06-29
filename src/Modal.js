import React, {Component} from 'react'

const display = {
  display: 'block',
  zIndex: 100
};
const hide = {
  display: 'none'
};

// const thisTrailerUrl = `http://api.themoviedb.org/3/movie/${this.movieData.results.id}/videos?language=en-US&api_key=fec8b5ab27b292a68294261bb21b04a5`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    }
  }

  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
        
      </div>
      
    </div>
    );
    return (
      <div>
        <a href="#" onClick={this.toggle}>{this.state.toggle ? 'Close Trailer' : 'View Trailer'}</a>
        {modal}
      </div>
    );
  }
}

export default Modal