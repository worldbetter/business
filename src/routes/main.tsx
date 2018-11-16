import * as React from 'react'
import {connect} from 'dva'
import * as Redux from 'redux'
import Commodity from "../components/main/commodity"

import {
  MainState as MainModelState, PREFIX as MainNamespace,
} from '../models/main/index'

import {style} from "typestyle"

import Header from "../components/main/header"
declare function require(path: string): any;
type MainProps = MainModelState

interface MainDispatcherProps {
  dispatch: Redux.Dispatch<any>
}

class Main extends React.Component<MainProps & MainDispatcherProps, {}> {

  render() {
    const mainStyle = style({
      width: '100%',
      height: '100vh',
      background: "linear-gradient(to bottom,#A9A9A9,white)"
    })

    const centerStyle = style({
      width: '60%',
      height: '100vh',
      margin: 'auto',
      textAlign: 'center',
      background: 'white'
    })


    return (
      <div className={mainStyle}>
        <div className={centerStyle}>
          <Header list={this.props.list}/>
          <Commodity image={require("../assets/mini.jpg")} name={"test"} price={1.0} description={"cartoon picture"} shop={"Disney"} location={"BeiJing"}/>
        </div>
      </div>
    )
  }



}

function mapStateToProps(state: any): MainProps {
  return state[MainNamespace]
}

export default connect(mapStateToProps)(Main)
