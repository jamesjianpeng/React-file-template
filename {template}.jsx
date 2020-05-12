import React from 'react'

export default class TemplateComponent extends React.component {
    constructor (props) {
        super(props)
        this.state = {
            msg: 'hello'
        }
    }

    componentDidMount() {}
  
    componentDidUpdate(prevProps) {}
    
    render() {
        return (
           <div>{msg}</div>
        )
    }
}