import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
    state() {
        return {
            name: 'Bill Gates',
        }
    },
    getters: {},
    actions: {
        saveName() {
            this.name = data
        },
    },
})
