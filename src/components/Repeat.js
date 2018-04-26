import React from 'react';

export default function Repeat(props) {
  let items = [];
  console.log(props);
  /**
   * props.children
   * 如果children就一个，直接指向那个对象
   * 如果children为多个，props.children为一个数组
   */
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}
