import React, { PureComponent } from 'react';

import Navbar from './components/Navbar';
import Search from './components/Search';
import RowContent from './components/RowContent';
import Footer from './components/Footer';
import FetchContent from './components/FetchContent';
import FetchCover from './components/FetchCover';


class App extends PureComponent {

    state = {
        newMoviesAmount: 3,
        newMoviesShow: false,
        popularMoviesAmount: 3,
        popularMoviesShow: false,
        newSeriesAmount: 3,
        newSeriesShow: false,
        popularSeriesAmount: 3,
        popularSeriesShow: false,
    };

    showMore(nameState, showState) {
        switch (nameState) {
            case "newMoviesShow":
                this.setState((prevState) => ({
                    newMoviesShow: !prevState.newMoviesShow,
                    newMoviesAmount: showState ? 19 : 3,
                }));
                break;
            case "popularMoviesShow":
                this.setState((prevState) => ({
                    popularMoviesShow: !prevState.popularMoviesShow,
                    popularMoviesAmount: showState ? 19 : 3,
                }));
                break;
            case "newSeriesShow":
                this.setState((prevState) => ({
                    newSeriesShow: !prevState.newSeriesShow,
                    newSeriesAmount: showState ? 19 : 3,
                }));
                break;
            case "popularSeriesShow":
                this.setState((prevState) => ({
                    popularSeriesShow: !prevState.popularSeriesShow,
                    popularSeriesAmount: showState ? 19 : 3,
                }));
                break;
            break;
        }
    }


    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <Navbar />
                    </div>
                    <div id="cover" className="row">
                        <FetchCover url="/movie/now_playing"/>
                    </div>
                    <div id="movies">
                        <RowContent
                            title="New Movies"
                            more={ () => this.showMore("newMoviesShow", !this.state.newMoviesShow)}
                            iconState={this.state.newMoviesShow}
                        >
                            <FetchContent url="/movie/upcoming" number={this.state.newMoviesAmount}/>
                        </RowContent>
                        <RowContent
                            title="Popular Movies"
                            more={ () => this.showMore("popularMoviesShow", !this.state.popularMoviesShow)}
                            iconState={this.state.popularMoviesShow}
                        >
                            <FetchContent url="/movie/popular" number={this.state.popularMoviesAmount}/>
                        </RowContent>
                    </div>
                    <div id="search" className="row">
                        <Search/>
                    </div>
                    <div id="series">
                        <RowContent
                            title="Series Airing Today"
                            more={ () => this.showMore("newSeriesShow", !this.state.newSeriesShow)}
                            iconState={this.state.newSeriesShow}
                        >
                            <FetchContent url="/tv/airing_today" number={this.state.newSeriesAmount}/>
                        </RowContent>
                        <RowContent
                            title="Popular Series"
                            more={ () => this.showMore("popularSeriesShow", !this.state.popularSeriesShow)}
                            iconState={this.state.popularSeriesShow}
                        >
                            <FetchContent url="/tv/popular" number={this.state.popularSeriesAmount}/>
                        </RowContent>
                    </div>
                    <div id="footer" className="row">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
