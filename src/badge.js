import React, { Component } from 'react'

export default class Badge extends Component {
  constructor() {
    super()
  }

  render() {
    let { fill, width, height, style, opacity, name } = this.props


    const initials = name.split(" ").map((w) => {
      return w[0].toUpperCase()
    }).concat()

		opacity = opacity ? opacity : '0'
		width = width ? width : '100%'
		height = height ? height : '100%'
		style = style ? style : null

		return (
			<svg width={width} height={height} viewBox="0 0 400 400" style={style} >
				<circle cx="200" cy="200" r="42" fill={fill}/>
        <text x="170" y="215" fontSize="50px" fontWeight={200} fill="#fff">{initials}</text>
			</svg>
		)
  }
}
