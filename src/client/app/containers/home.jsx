import React from 'react';
import {connect} from 'react-redux';
import {fetchJOD} from '../actions';

class Home extends React.Component {

    componentDidMount(){
        this.props.getJOD();
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <p>{this.props.jod}</p>
                    <a href="#/jokes" className="btn btn-success">Discover Awesomeness</a>
                </div>
            </div>
        )
    }
}

var mapStateToProps = function (state) {
    return {
        jod: state.jod
    }
}

var mapDispatchToProps = function (dispatch) {
    return {
        getJOD: () => dispatch(fetchJOD())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
