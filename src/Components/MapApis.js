import React, { Component } from 'react';

export default class MapApis extends Component {
	componentDidMount() {
		this.loadMap();
	}

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
							color: '#1d2c4d',
						},
					],
				},
				{
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#8ec3b9',
						},
					],
				},
				{
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#1a3646',
						},
					],
				},
				{
					featureType: 'administrative.country',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#4b6878',
						},
					],
				},
				{
					featureType: 'administrative.country',
					elementType: 'labels',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'administrative.land_parcel',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#64779e',
						},
					],
				},
				{
					featureType: 'administrative.province',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#4b6878',
						},
					],
				},
				{
					featureType: 'landscape.man_made',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#334e87',
						},
					],
				},
				{
					featureType: 'landscape.natural',
					elementType: 'geometry',
					stylers: [
						{
							color: '#023e58',
						},
					],
				},
				{
					featureType: 'landscape.natural',
					elementType: 'labels',
					stylers: [
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
					elementType: 'geometry',
					stylers: [
						{
							color: '#283d6a',
						},
					],
				},
				{
					featureType: 'poi',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#6f9ba5',
						},
					],
				},
				{
					featureType: 'poi',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#1d2c4d',
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
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#023e58',
						},
					],
				},
				{
					featureType: 'poi.park',
					elementType: 'labels.text',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'poi.park',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#3C7680',
						},
					],
				},
				{
					featureType: 'poi.sports_complex',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [
						{
							color: '#304a7d',
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#98a5be',
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#1d2c4d',
						},
					],
				},
				{
					featureType: 'road.arterial',
					stylers: [
						{
							color: '#0054a8',
						},
						{
							visibility: 'simplified',
						},
					],
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [
						{
							color: '#2c6675',
						},
					],
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#00fd20',
						},
					],
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#008080',
						},
					],
				},
				{
					featureType: 'road.highway',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#b0d5ce',
						},
					],
				},
				{
					featureType: 'road.highway',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#023e58',
						},
					],
				},
				{
					featureType: 'road.local',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'transit',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#98a5be',
						},
					],
				},
				{
					featureType: 'transit',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#1d2c4d',
						},
					],
				},
				{
					featureType: 'transit.line',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#283d6a',
						},
					],
				},
				{
					featureType: 'transit.station',
					elementType: 'geometry',
					stylers: [
						{
							color: '#3a4762',
						},
					],
				},
				{
					featureType: 'water',
					stylers: [
						{
							color: '#6dd268',
						},
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
							color: '#0e1626',
						},
					],
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#4e6d70',
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
				mapTypeIds: ['styled_map'],
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
		return (
			<main>
				<div id="map" />
			</main>
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

//! UTA Token UTDOP000ZRH
