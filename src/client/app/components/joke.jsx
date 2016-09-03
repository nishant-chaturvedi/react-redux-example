import React from 'react';


class Joke extends React.Component {
  render(){
    return (
      <div className="panel">
          <div className="panel-body">
            {this.props.joke}
          </div>
      </div>
    )
  }
}


export default Joke;
