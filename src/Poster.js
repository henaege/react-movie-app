import React, { Component } from 'react';
import { default as OverflowEllipsis } from 'react-overflow-ellipsis'
import Modal from "./Modal"

class Poster extends Component{
    
    render(){
        console.log(this.props.poster)
        var imagePath = `http://image.tmdb.org/t/p/w300${this.props.poster.poster_path}`;
        return(
            
            <div className="col s12 m4 l3">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={imagePath} />
                    </div>
                    <div className="card-content">
                    <OverflowEllipsis>
                    <span style={{ display: 'inline' }} className="card-title activator grey-text text-darken-4">{this.props.poster.original_title}
                        <i className="material-icons right">more_vert</i></span>
                    <Modal />
                    </OverflowEllipsis>
                    </div>
                    <div className="card-reveal">
                    <span style={{ display: 'inline' }} className="card-title grey-text text-darken-4">{this.props.poster.original_title}<i className="material-icons right">close</i></span>
                    <p className="flow-text overview">{this.props.poster.overview}</p>
                    </div>
                </div>
                
            </div>
                

                
        )
    }
}

export default Poster