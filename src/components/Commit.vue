<template>
	<div class="commit">
		<md-card>
			<md-card-header>
				<md-avatar>
					<img :src="data.author.user.avatarUrl" :alt="data.author.user.login"/>
				</md-avatar>

				<div class="md-title">{{ data.author.user.login }} made a new commit.</div>
			</md-card-header>

			<md-card-content>
				<p>{{ data.message }}</p>
				<p><span class="additions">+{{ data.additions }}</span> : <span class="deletions">-{{ data.deletions }}</span></p>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
export default {
	name: 'commit',
	props: ['data']
}
</script>

<style>
.additions {
	color: #28a745;
}
.deletions {
	color: #dd0c1e;
}
</style>
