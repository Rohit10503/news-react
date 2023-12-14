import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';


export default class NewsItems extends Component {
  render() {

     let {title,description ,imageurl,url}=this.props;

    return (
      <div>
            <Card style={{  width: '18rem' } } >
      <Card.Img variant="top" src={imageurl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text classname="desc"  >
          {description}
        </Card.Text>
      <a target="_blank" rel="noreferrer"  href={url} className="btn btn-sm btn-dark ">Visit</a>
      </Card.Body>
    </Card>
      </div>
    )
  }
}
