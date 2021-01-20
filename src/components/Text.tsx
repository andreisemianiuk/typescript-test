import React from 'react'
import '../App.css'

// type DisplayPanel = true | false

export function Text(props: any) {
	return <div className={props.displayed ? 'panel' : 'no-panel'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam enim facere eius consectetur, doloremque quam, sequi atque voluptatibus amet, autem quo laudantium quae dicta! A officiis veniam ad illo?</div>
}