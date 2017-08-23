import React, { PureComponent } from 'react';
import Content from './Content';
import Loading from './Loading';
import {api_key, api_url} from '../constants';

class FetchContent extends PureComponent {


    state = {
        loading: true,
        results: [],
    };

    componentDidMount() {

        fetch(`${api_url}${this.props.url}?api_key=${api_key}`).then( (res) => {
            return res.json();
        }).then( (data) => {
            this.setState({
                results: data.results,
                loading: false,
            })
        }).catch( (error) => {

        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                    <Loading height="360"/>
                </div>
            )
        }
        return (
            <div>
                {
                    this.state.results.map( (res, index) => {
                        if (index <= this.props.number) {
                            return (
                            <Content
                                key={index}
                                id={res.id}
                                background={`http://image.tmdb.org/t/p/w500/${res.poster_path}`}
                            />)
                        }
                        return true;
                    })
                }
            </div>
        )
    }
}

export default FetchContent;