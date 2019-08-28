import React, { Component } from 'react';
import NewsItem from '../components/NewsItem';

import FakeNews from '../fake/news';

export default class NewsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-align">
                <h2>New Page</h2>
                <div className="news">
                    {
                        FakeNews.map((item, index) => {
                            return <NewsItem key={ index } item={ item }/>
                        })
                    }
                </div>
            </div>
        )
    }
}