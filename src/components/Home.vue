<template>
    <h1 class="font-extrabold text-3xl mb-6">Home</h1>

    <p class="mb-6">Name in store is: {{ UserStore.name }}</p>

    <input
        @keyup.enter="saveName"
        v-model="newName"
        type="text"
        class="p-2 mr-4 border border-gray-600 rounded"
    />

    <button @click="saveName" class="text-white bg-indigo-600 p-2 rounded">
        Submit
    </button>
</template>
<script>
import { computed, ref } from 'vue'
import { useUserStore } from '../store/modules/UserStore'

export default {
    setup() {
        const UserStore = useUserStore()

        const name = computed(() => {
            return UserStore.name
        })

        const newName = ref('')

        function saveName() {
            this.UserStore.name = newName.value
            newName.value = ''
        }
        return {
            computed,
            ref,
            UserStore,
            name,
            newName,
            saveName,
        }
    },
}
</script>

<style>
h1 {
    color: #4e46e5;
}
</style>