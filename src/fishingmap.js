//everything on this page needs to be changed over to react

import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './fishingmap.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidmhhcnRtYW4xMSIsImEiOiJjbDFpbjB6cmwxdjlwM2NwY2JmNDd6ZWNhIn0.02BAwia3PHsP0Rdg7G6TYw';

export function FishMap() {	

			const fish = {  // this is the array of places i have fished.  The waters names and coordinates.
				'type': 'FeatureCollection',
				'features': [
					{
					'type': 'Feature',
					'properties': {
						'message': 'Jordan Lake',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-79.00699, 35.75163]
					}
					},
					{
					'type': 'Feature',
					'properties': {
						'message': 'Slaughter Beach',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-75.31848, 38.94012]
					}
					},    
					{
					'type': 'Feature',
					'properties': {
						'message': 'French Broad River',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-83.70271, 35.95707]
					}
					},    
					{
					'type': 'Feature',
					'properties': {
						'message': 'Sugar Hollow Reservoir',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-78.74288, 38.13885]
					}
					},    
					{
					'type': 'Feature',
					'properties': {
						'message': 'Tolchester Marina',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-76.24514, 39.21350]
					}
					},    
					{
					'type': 'Feature',
					'properties': {
						'message': 'Conowingo Dam',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-76.17362, 39.65539]
					}
					},    
					{
					'type': 'Feature',
					'properties': {
						'message': 'Keuka Lake',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-77.21841, 42.40955]
					}
					},    
					{
					'type': 'Feature',
					'properties': {
						'message': 'Stillwater Lake',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-75.40432, 41.12242]
					}
					},    
					{
					'type': 'Feature',
					'properties': {
						'message': 'Lake Anna',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-77.72847, 38.00828]
					}
					},
					{
					'type': 'Feature',
					'properties': {
						'message': 'Chambers Lake',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-75.84954, 40.02822]
					}
					},
					{
					'type': 'Feature',
					'properties': {
						'message': 'Wildwood',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-74.83374, 38.99096]
					}
					},
					{
					'type': 'Feature',
					'properties': {
						'message': 'Tulpehocken Creek',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-75.97555, 40.36909]
					}
					},
					{
					'type': 'Feature',
					'properties': {
						'message': 'Tobyhanna Lake',
						'iconSize': [40, 40]
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [-75.40532, 41.20845]
					}
					}
				]
			};
	
			const map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [-79.95847, 39.62971],
				zoom: 5
			});
			
			// this adds the markers to the map.
			for (const marker of fish.features) {
				const el = document.createElement('div');
				const width = marker.properties.iconSize[0];
				const height = marker.properties.iconSize[1];
				el.className = 'marker';
				el.style.backgroundImage = `url(fishicon.png)`;
				el.style.width = `${width}px`;
				el.style.height = `${height}px`;
				el.style.backgroundSize = '100%';
				el.addEventListener('click', () => {
					window.alert(marker.properties.message);
				});

				// this adds the markers to the map.
				new mapboxgl.Marker(el)
				.setLngLat(marker.geometry.coordinates)
				.addTo(map);
			} 

		

}