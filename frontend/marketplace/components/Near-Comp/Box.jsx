import React from 'react';

export default function Box(props) {
  return (
        <div className='Box'>
            <p className='data--name'>{props.name}</p>
            <p className='data--value'>{props.value}</p>
        </div>
  )
}