import React, { PureComponent } from 'react';
import Cover from './Cover';
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
            console.log(error);
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Loading height="520"/>
                </div>
            )
        }
        return (
            <div>
                {
                    this.state.results.map( (res, index) => {
                        if (index <= 0) {
                            return (
                            <Cover
                                key={index}
                                data={res}
                                background={`http://image.tmdb.org/t/p/original/${res.backdrop_path}`}
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