import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Title from './Title';
import Input from './Input';
import SearchResult from './SearchResult';
import SearchResultLoading from './SearchResultLoading';

import {api_key, api_url} from '../constants';

class Search extends PureComponent {

    state= {
        text: "",
        searchTimeOut: 0,
        data: [],
        loading: false
    };

    searchResults(text){
        clearTimeout( this.state.searchTimeOut);
        if (text) {
            this.setState({
                loading: true,
                searchTimeOut: setTimeout( () => {
                    this.getApiResults(text);
                }, 1000)
            });
            return;
        }

        this.setState({
            data: [],
            loading: false,
        })
    }

    getApiResults(text) {
        fetch(`${api_url}/search/movie?api_key=${api_key}&query=${text}`).then( (res) => {
            return res.json();
        }).then( (data) => {
            this.setState({
                loading: false,
                data: data.results,
            })
        }).catch( (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div id="Search" className={this.props.className}>
                    <Title>Search for Movies or Series</Title>
                    <Input
                        placeholder="Search..."
                        type="text"
                        onKeyUp={ (e) => this.searchResults(e.target.value)}
                        value={this.state.text}
                        onChange={ (e) => this.setState({
                            text: e.target.value,
                        })}
                    />
                    {
                        this.state.loading ?
                            <SearchResultLoading/>
                            :
                            (Object.keys(this.state.data).length === 0) ?
                                null
                                :
                                this.state.data.map( (res, index) => {
                                    if (index <= 4) {
                                        return <SearchResult key={res.id} data={res}/>
                                    }
                                })
                    }
                </div>
            </div>
        )
    }
}


const SearchWithStyles = styled(Search)`

    height: auto;
    text-align: center;
    padding: 120px 0 140px 0;
    
    h2 {
        margin-left: 0;
    }
    
    @media screen and (max-width: 720px) {
    }
    
`;

export default SearchWithStyles;