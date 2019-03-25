import React, { Component, Fragment } from 'react';

export default class CustomMap extends Component {
	/* componentDidMount() {
		this.loadMap();
	} */

	loadMap = () => {
		loadScript(
			`https://maps.googleapis.com/maps/api/js?key=${
				process.env.REACT_APP_GOOGLE_WEATHER_WORK_API
			}&region=US&callback=initMap`
		);
		window.initMap = this.initMap;
	};
	initMap = () => {
		const styledMapType = new window.google.maps.StyledMapType(
			[
				{
					elementType: 'geometry',
					stylers: [
						{
							color: '#212121',
						},
					],
				},
				{
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#757575',
						},
					],
				},
				{
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#212121',
						},
					],
				},
				{
					featureType: 'administrative',
					elementType: 'geometry',
					stylers: [
						{
							color: '#757575',
						},
					],
				},
				{
					featureType: 'administrative.country',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#9e9e9e',
						},
					],
				},
				{
					featureType: 'administrative.land_parcel',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'administrative.locality',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#bdbdbd',
						},
					],
				},
				{
					featureType: 'landscape.man_made',
					stylers: [
						{
							color: '#41fc6b',
						},
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'poi',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'poi',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#757575',
						},
					],
				},
				{
					featureType: 'poi.attraction',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'poi.business',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry',
					stylers: [
						{
							color: '#181818',
						},
					],
				},
				{
					featureType: 'poi.park',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#616161',
						},
					],
				},
				{
					featureType: 'poi.park',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#1b1b1b',
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#2c2c2c',
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#8a8a8a',
						},
					],
				},
				{
					featureType: 'road.arterial',
					elementType: 'geometry',
					stylers: [
						{
							color: '#373737',
						},
					],
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'road.highway',
					stylers: [
						{
							weight: 2.5,
						},
					],
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [
						{
							color: '#3c3c3c',
						},
					],
				},
				{
					featureType: 'road.highway',
					elementType: 'labels.text',
					stylers: [
						{
							color: '#6580fe',
						},
					],
				},
				{
					featureType: 'road.highway.controlled_access',
					stylers: [
						{
							visibility: 'on',
						},
					],
				},
				{
					featureType: 'road.highway.controlled_access',
					elementType: 'geometry',
					stylers: [
						{
							color: '#64b1ff',
						},
					],
				},
				{
					featureType: 'road.highway.controlled_access',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#c0c0c0',
						},
					],
				},
				{
					featureType: 'road.highway.controlled_access',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#0080ff',
						},
						{
							weight: 3,
						},
					],
				},
				{
					featureType: 'road.highway.controlled_access',
					elementType: 'labels',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'road.local',
					elementType: 'labels',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'road.local',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#616161',
						},
					],
				},
				{
					featureType: 'transit',
					stylers: [
						{
							color: '#aeae00',
						},
						{
							visibility: 'on',
						},
						{
							weight: 3.5,
						},
					],
				},
				{
					featureType: 'transit',
					elementType: 'geometry',
					stylers: [
						{
							color: '#ffff00',
						},
						{
							weight: 3.5,
						},
					],
				},
				{
					featureType: 'transit',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#ffff00',
						},
						{
							visibility: 'on',
						},
					],
				},
				{
					featureType: 'transit',
					elementType: 'geometry.stroke',
					stylers: [
						{
							visibility: 'on',
						},
					],
				},
				{
					featureType: 'transit',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#757575',
						},
					],
				},
				{
					featureType: 'transit.station.airport',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'water',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'water',
					elementType: 'geometry',
					stylers: [
						{
							color: '#000000',
						},
					],
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#3d3d3d',
						},
					],
				},
			],
			{ name: 'Styled Map' }
		);

		let options = {
			zoom: 11,
			center: { lat: 40.52467, lng: -111.863823 },
			mapTypeControlOptions: {
				mapTypeIds: ['none'],
			},
		};

		let map = new window.google.maps.Map(
			document.getElementById('map'),
			options
		);

		let trafficLayer = new window.google.maps.TrafficLayer();
		trafficLayer.setMap(map);

		let transitLayer = new window.google.maps.TransitLayer();
		transitLayer.setMap(map);

		map.mapTypes.set('styled_map', styledMapType);
		map.setMapTypeId('styled_map');
	};

	render() {
		const divStyle = {
			position: 'fixed'
		}
		return (
			<Fragment>
				<div id='map' style={divStyle} />
			</Fragment>
		);
	}
}

let loadScript = url => {
	let index = window.document.getElementsByTagName('script')[0];
	let script = window.document.createElement('script');
	script.src = url;
	script.async = true;
	script.defer = true;
	index.parentNode.insertBefore(script, index);
};
