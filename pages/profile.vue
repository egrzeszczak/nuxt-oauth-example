<script setup lang="ts">
definePageMeta({
  middleware: 'sidebase-auth'
})
const { status, data } = useAuth()
</script>

<template>
  <div class="">

    You are currently {{ status }}.

    <div v-if="status === 'authenticated'">
      <pre>Info {{ JSON.stringify(data?.user, null, 2) }}</pre>
    </div>
    <div v-else>
      <p>No user information available.</p>
    </div>

  </div>
</template>