import React, { Component } from "react";
import Newsitem from "./Newsitem";
export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&s&apiKey=c18fa1c7efb7409fb3e360481b86f029";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <>
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "90px" }}
        >
          NewsHub - Top Headlines
        </h1>
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <Newsitem
                    title={
                      !element.title ? "No title" : element.title.slice(0, 35)
                    }
                    description={
                      !element.description
                        ? "No description  "
                        : element.description.slice(0, 88)
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container">
        </div>
      </>
    );
  }
}
