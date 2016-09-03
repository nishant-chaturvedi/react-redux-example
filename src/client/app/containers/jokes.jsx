import React from 'react';
import {connect} from 'react-redux';

import {fetchJokes} from '../actions';

import Joke from '../components/joke.jsx';


class Jokes extends React.Component {

  componentDidMount() {
    this.props.surpriseMe();
  }

  render() {
    var jks = "";

    if (this.props.jokes.length > 0)
      jks = this.props.jokes.map((j) => {
        return (
          <Joke key={j.id} joke={j.joke} />
        )
      });

    return (
      <div className="container">
        {jks}

        <div>
          <button className="btn btn-success pull-right" onClick={() => this.props.surpriseMe() }>Surprise Me</button>
        </div>
      </div>

    )
  }
}

var mapStateToProps = function (state) {
  return {
    jokes: state.jokes
  }
}

var mapDispatchToProps = function (dispatch) {
  return {
    surpriseMe: () => dispatch(fetchJokes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
