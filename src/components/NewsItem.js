import React from 'react';
import { Link } from "react-router-dom";

export default function({ item }) {
    let body = item.body && item.body.split(" ").slice(0, 40).join(" ") + "...";

    return (
        <div className="news_item">
            <h3>{ item.title }</h3>
            <p>{ body }</p>
            <div className="action">
                <Link to={{ pathname: "/news/" + item.id, state: item }}>Read more</Link>
            </div>
        </div>
    )
}