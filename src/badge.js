import React, { Component } from 'react'

export default class Badge extends Component {
  constructor() {
    super()
  }

  render() {
    let {
      fill,
      width,
      height,
      style,
      opacity,
      name,
      x,
      y,
      fontSize
    } = this.props

    const initials = name.split(" ").map((w) => {
      return w[0].toUpperCase()
    }).concat()

    opacity = opacity ? opacity : '0'
    width = width ? width : '100%'
    height = height ? height : '100%'
    style = style ? style : null
    x = x ? x : "175"
    y = y ? y : "215"
    fontSize = fontSize ? fontSize : "36px"

    return (
      <svg width={width} height={height} viewBox="0 0 400 400" style={style} >
        <circle cx="200" cy="200" r="42" fill={fill}/>
        <text x={x} y={y} fontSize={fontSize} fontWeight={200} fill="#fff">{initials}</text>
      </svg>
    )
  }
}
