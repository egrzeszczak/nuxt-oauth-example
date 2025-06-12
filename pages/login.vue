<template>
  <div class="">
    <div class="card w-96 bg-base-100 card-md shadow-sm">
      <div class="card-body">
        <h2 class="card-title justify-center">Login options</h2>
        <p>Please select your identity provider</p>
        <div class="justify-center card-actions">
          <button class="btn btn-wide btn-primary flex items-center gap-2" @click="loginWithMicrosoft">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5">
              <rect fill="#F35325" x="2" y="2" width="13" height="13" />
              <rect fill="#81BC06" x="17" y="2" width="13" height="13" />
              <rect fill="#05A6F0" x="2" y="17" width="13" height="13" />
              <rect fill="#FFBA08" x="17" y="17" width="13" height="13" />
            </svg>
            Login with Microsoft
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const { status } = useAuth();
if (status.value === 'authenticated') {
  navigateTo('/');
}

const loginWithMicrosoft = () => {
  // Use Nuxt Auth composable to sign in with Microsoft provider
  const { signIn } = useAuth();
  signIn('azure-ad');
};
</script>