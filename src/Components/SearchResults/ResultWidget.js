import React from "react";
import './searchresults.css'

const ResultWidget = (props) => {
    return (
        <div className={"result"}>
            <a className={"result-link"} href={props.result.url}>
                <p className={"result-url"}>{props.result.url}</p>
                <h2 className={"result-title"}>{props.result.title}</h2>
            </a>
            <p className={"result-desc"}>{props.result.desc}</p>
        </div>
    )
}

const Results = (props) => {
    return (
        <div className={'search-results-container'}>
            <p className={'results-summary'}>About 4 results (0.00 seconds) </p>
            {response.map((result) => <ResultWidget result={result} />)}
        </div>
    )
}

export { ResultWidget }
export default Results

const response = [
    {
        title: "Gmail - Mail from Google",
        url: "https://mail.google.com/mail/u/0/#inbox",
        desc: "Gmail is email that's intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access."
    },
    {
        title: "Algolia: Site Search & Discovery powered by AI",
        url: "https://www.algolia.com",
        desc: "Rapidly create and scale AI-powered search and discovery across websites and applications. Algolia is " +
            "fast, customizable and secure."
    },
    {
        title: "Facebook – log in or sign up",
        url: "https://www.facebook.com/",
        desc: "Create an account or log in to Facebook. Connect with friends, family and other people you know. Share " +
            "photos and videos, send messages and get updates."
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com",
        desc: "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, " +
            "videos & messages with friends & family."
    }
]
