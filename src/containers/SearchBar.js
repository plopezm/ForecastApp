import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        //Binding function to this
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form
                className="input-group"
                onSubmit={this.onFormSubmit}
            >
                <div className="form-group">
                    <input
                        id="cityName"
                        placeholder="Get a five-day forecast in your favorite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                </div>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispath){
    return bindActionCreators({ fetchWeather }, dispath);
}

//connect(props, state)(Component)
export default connect(null, mapDispatchToProps)(SearchBar);