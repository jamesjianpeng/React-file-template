import React from 'react'

export interface IState {
    msg: string
}

export interface IProps {}

export default class TemplateComponent extends React.component<IState, IProps> {
    constructor (props: IProps) {
      super(props)
      this.state = {
        msg: 'hello'
      }
    }

    componentDidMount() {}
  
    componentDidUpdate(prevProps) {}
    
    render() {
      return (
        <div>{this.state.msg}</div>
      )
    }
}