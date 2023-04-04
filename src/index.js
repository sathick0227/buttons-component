import React from 'react'
import './buttonStyle.css';

export default function Button(props) {
	const disableBtn = !props.isDisabled?"btn-normal":"btn-disable"
	const className=props.className;
	return (
		<button
		type={props.type}
		className={props.className!=null?`${className} ${disableBtn}`:"default-btn"}
		style={props.style}
		disabled={props.isDisabled}
		>{props.value}</button>
	)
}