import Globe from 'globe.gl';
import data from './data.js';
import Canvg from 'canvg';

const world = Globe({
	antialias: true,
	aliases: true
})
	.onGlobeClick(() => getSVGOnClick())
	.showAtmosphere(true)
	.atmosphereColor('white')
	.atmosphereAltitude(0.15)
	.globeImageUrl('./img/8k_earth_daymap.jpeg')
	.arcsData(data['arcs'])
	.arcColor('color')
	.arcDashLength(() => Math.random())
	.arcDashGap(() => Math.random())
	.arcDashAnimateTime(() => Math.random() * 4000 + 500)
	.arcStroke('stroke')(document.getElementById('app'));

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.9;

let canvasV;
const getSVGOnClick = async () => {
	const canvas = document.getElementsByTagName('canvas');
	const ctx = canvas[0].getContext('webgl2');

	canvasV = await Canvg.from(ctx, './img/test.svg');

	canvasV.start();
	console.log(ctx);
};

// window.onbeforeunload = () => {
// 	canvasV.stop();
// };
