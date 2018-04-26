/**
 * react 必须要import进来，即使没有用到
 * 因为转译jsx的时候用到了React.createElement
 */
import React from 'react';
import PropTypes from 'prop-types';

// 组件名字必须要大写
export default function Item(props) {
  return <li>{props.message}</li>;
}

Item.propTypes = {
  message: PropTypes.string
};

// Specifies the default values for props:
Item.defaultProps = {
  message: 'Stranger'
};
