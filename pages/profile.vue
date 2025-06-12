<script setup lang="ts">
definePageMeta({
  middleware: 'sidebase-auth'
})
const { status, data, signOut } = useAuth()
function logout() {
  signOut()
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="card w-full max-w-lg bg-base-100 border border-gray-200 shadow-xl">
      <div class="card-body items-start text-left break-words">
        <template v-if="status === 'authenticated' && data?.user">
          <div class="flex items-center mb-4">
            <div class="avatar mr-4">
              <div class="w-16 rounded-full">
                <template v-if="data.user.image">
                  <img :src="data.user.image" alt="Profile Picture" />
                </template>
                <template v-else>
                  <div
                    class="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full text-2xl text-gray-500">
                    {{(data?.user?.name || 'S Y').split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()}}
                  </div>
                </template>
              </div>
            </div>
            <div>
              <h2 class="card-title break-words">{{ data.user.name || 'No Name' }}</h2>
              <p class="text-gray-500 break-words max-w-lg whitespace-pre-line break-all">
                {{ data.user.email || 'No Email' }}
              </p>
            </div>
          </div>
          <!-- DaisyUI Collapse for user JSON -->
          <div class="w-full mb-4">
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
              <input type="checkbox" class="peer" />
              <div class="collapse-title font-medium">
                Show Full User JSON
              </div>
              <div class="collapse-content max-h-64 overflow-auto">
                <pre class="whitespace-pre-wrap break-all text-xs bg-base-100 p-2 rounded">
                  {{ JSON.stringify(data.user, null, 2) }}
                </pre>
              </div>
            </div>
          </div>
          <div class="card-actions mt-4 w-full">
            <button class="btn btn-block" @click="logout">Logout</button>
          </div>
        </template>
        <template v-else>
          <p class="break-words">No user information available.</p>
        </template>
      </div>
    </div>
  </div>
</template>