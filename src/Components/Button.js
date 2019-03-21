import React, { Component } from 'react';

export const Button = ({ text, onClick, type, disabled, id }) => (
	<button id ={id} type={type} disabled={disabled} onClick={onClick}>
		{text}
	</button>
);
