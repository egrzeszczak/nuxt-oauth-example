<script setup lang="ts">
const { status, data } = useAuth()
const logout = () => {
	useAuth().signOut()
}
</script>

<template>
	<div>
		<nav class="flex items-center justify-between bg-base-100 shadow-sm px-4 py-2">
			<NuxtLink to="/" class="text-xl font-bold">nuxt-oauth-example</NuxtLink>
			<div class="flex items-center gap-2">
				<template v-if="status !== 'authenticated'">
					<NuxtLink to="/login" class="btn btn-sm">Login</NuxtLink>
				</template>
				<template v-else>
					<div v-if="data?.user?.image" class="avatar">
						<div class="w-8 rounded-full">
							<img :src="data?.user?.image" alt="User Photo" />
						</div>
					</div>
					<div v-else class="avatar avatar-placeholder">
						<div class="flex items-center justify-center w-8 bg-gray-200 rounded-full text-xs text-gray-500">
							<span>
								{{ (data?.user?.name || 'S Y').split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase() }}
							</span>
						</div>
					</div>
					<NuxtLink to="/profile" class="btn btn-ghost btn-sm px-2">
						{{ data?.user?.name }}
					</NuxtLink>
					<button class="btn btn-sm" @click="logout">Logout</button>
				</template>
			</div>
		</nav>
		<div class="flex w-full min-h-screen items-center justify-center text-center">
			<NuxtPage />
		</div>
	</div>
</template>
