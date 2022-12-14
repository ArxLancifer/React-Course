import React from 'react'

function MyParagraph(props) {
    console.log('MyParagraph is running')
  return <p>{props.children}</p>
}

export default  MyParagraph
