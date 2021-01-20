import React, { useState } from 'react';
import '../App.css';
import { Text } from './Text'

export function Accordion(props: any) {

	const [isDisplayed, setDisplayed] = useState(false)

	const handleClick = (): void => {
		if (isDisplayed) {
			setDisplayed(false)
		} else {
			setDisplayed(true)
		}
	}

	return (
		<div className='accordion'>
			<button className='btn' onClick={handleClick} >accordion</button>
			<Text displayed={isDisplayed} />
		</div>
	)
}

