import React from 'react'

export default function Inputs() {
	return (
		<div className='inputs-block'>
			<h1 >Add Gig</h1>
			<div className='inputs'>
				<input type='text' placeholder='Gig Name' className='input'></input>
				<input type='text' placeholder='Price' className='input'></input>
			</div>
			<button onClick={console.log("hola")}>Add</button>
		</div>
	)
}