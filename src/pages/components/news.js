import React, { Component } from 'react'
import Spinner from "../../common/spinner"
import NewsItems from './news-items'
import "./news.css"
export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,


        }
    }

    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f00a961ecdbb4350b2cd5c57bf003bc1&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults,loading:false });
        
        
    }
    
    
    getPreviousPage = async () => {
        console.log("Privious");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f00a961ecdbb4350b2cd5c57bf003bc1&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json();
        
        
        
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading:false
        })
    }
    
    getNextPage = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

            console.log("Next");
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f00a961ecdbb4350b2cd5c57bf003bc1&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parseData = await data.json();
            

            this.setState({
                articles: parseData.articles,
                page: this.state.page + 1,
                loading:false
            })
        }

    }


    render() {
        return (
            <div className='container'>
                <h1 className='heading '>News Rohit - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row '>
                    {!this.state.loading && this.state.articles.map((element) => {

                        return (
                            <div className='col-md-4 my-2' key={element.url}>
                                <NewsItems url={element.url} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage ? element.urlToImage : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg "} />
                            </div>
                        )
                    })}


                </div>
                <div className='my-4 container button'>
                    <div><button className='btn btn-dark btn-sm' disabled={this.state.page <= 1} onClick={this.getPreviousPage} > &larr; Previous</button></div>
                    <div><button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark btn-sm' onClick={this.getNextPage}>Next  &rarr;</button></div>


                </div>
            </div>

        )
    }
}
