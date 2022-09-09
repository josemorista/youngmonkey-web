<template>
	<svg id="filters">
		<defs>
			<filter id="threshold">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
				/>
			</filter>
		</defs>
	</svg>
	<div id="container">
		<span ref="text1" id="text1"></span>
		<span ref="text2" id="text2"></span>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';

interface MorphTextProps {
	texts: Array<string>;
	morphTime: number;
	cooldownTime: number;
}

const props = defineProps<MorphTextProps>();
const text1 = ref<HTMLSpanElement>();
const text2 = ref<HTMLSpanElement>();

let textIndex = props.texts.length - 1;
let time = Date.now();
let morph = 0;
let cooldown = props.cooldownTime;

if (text1.value && text2.value) {
	text1.value.innerText = props.texts[textIndex % props.texts.length];
	text2.value.innerText = props.texts[(textIndex + 1) % props.texts.length];
}

function doMorph() {
	morph -= cooldown;
	cooldown = 0;

	let fraction = morph / props.morphTime;

	if (fraction > 1) {
		cooldown = props.cooldownTime;
		fraction = 1;
	}

	setMorph(fraction);
}

function setMorph(fraction: number) {
	if (text1.value && text2.value) {
		text2.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		text2.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

		fraction = 1 - fraction;
		text1.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		text1.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

		text1.value.textContent = props.texts[textIndex % props.texts.length];
		text2.value.textContent = props.texts[(textIndex + 1) % props.texts.length];
	}
}

function doCooldown() {
	morph = 0;
	if (text1.value && text2.value) {
		text2.value.style.filter = '';
		text2.value.style.opacity = '100%';

		text1.value.style.filter = '';
		text1.value.style.opacity = '0%';
	}
}

function animate() {
	window.requestAnimationFrame(animate);

	let newTime = Date.now();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;

	cooldown -= dt;

	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}

		doMorph();
	} else {
		doCooldown();
	}
}

onMounted(() => {
	animate();
});
</script>

<style lang="scss">
#container {
	position: relative;
	margin: auto;
	top: 0;
	bottom: 0;
	filter: url(#threshold) blur(0.6px);
}

#text1,
#text2 {
	position: absolute;
	width: 100%;
	display: inline-block;
	text-align: center;
	user-select: none;
}
</style>
