<template>
	<section id="about" class="container">
		<h1>About</h1>
		<div class="row gx-5">
			<figure class="col-md-6">
				<img src="../assets/images/profile.jpg" alt="profile">
				<figcaption>About Mincheol Shin</figcaption>
			</figure>
			<p class="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo itaque possimus autem? Eligendi libero ipsum perferendis voluptate, reprehenderit dolores quasi amet ex dignissimos cupiditate omnis! Ipsam fugiat vero repellat.</p>
		</div>
		<article class="row mt-5">
			<h2>Skills</h2>
			<dl v-for="(skill, i) in skills" :key="i">
				<dt class="lead">{{ skill.name }}</dt>
				<dd>
					<div
						class="progress"
						role="progressbar"
					>
						<div class="progress-bar" :style="{ width: skill.point }"></div>
					</div>
				</dd>
			</dl>
		</article>
	</section>
</template>

<script setup>
	const skills = [
		{ name: 'Java', point: '90%' },
		{ name: 'Kotlin', point: '80%' },
		{ name: 'Spring', point: '50%' },
		{ name: 'JPA', point: '75%' },
	];
</script>

<style lang="scss">
	figure {
		img { width: 100%;}
	}
</style>