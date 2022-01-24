import Globe from 'globe.gl';
import data from './data.js';
import imgUrl from '/img/8k_earth_daymap.jpeg';
// import { fabric } from 'fabric';

const world = Globe({
	antialias: true,
	aliases: true
})
	.onGlobeClick(() => getSVGOnClick())
	.showAtmosphere(true)
	.atmosphereColor('white')
	.atmosphereAltitude(0.15)
	.globeImageUrl(imgUrl)
	.arcsData(data['arcs'])
	.arcColor('color')
	.arcDashLength(() => Math.random())
	.arcDashGap(() => Math.random())
	.arcDashAnimateTime(() => Math.random() * 4000 + 500)
	.arcsTransitionDuration(1000)
	// .arcDashAnimateTime(() => Math.random() * 4000 + 500)
	.arcStroke('stroke')(document.getElementById('app'));

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.9;

// const getSVGOnClick = () => {
// 	const canvas = document.getElementsByTagName('canvas');
// 	const ctx = canvas[0].getContext('webgl2');

// 	const convertCanvas = new fabric.Rect({ canvas });

// 	console.log(ctx, convertCanvas.toSVG());
// };
