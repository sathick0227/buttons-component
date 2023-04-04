import React from 'react'
import './Styles/buttonStyle.css';
import PropTypes from 'prop-types';

function Button({type,className,style,isDisabled,value,onPress}) {
	const disableBtn = !isDisabled?"btn-normal":"btn-disable"
	const className=className;
	console.log("done")
	console.log(onPress)
	return (
		<button
		type={type}
		className={className!=null?`${className} ${disableBtn}`:"default-btn"}
		style={style}
		disabled={isDisabled}
		onClick={onPress}
		>{value}</button>
	)
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,

};

Button.defaultProps = {
  onPress:console.log("done"),
  value: 'button',
};

export default Button;