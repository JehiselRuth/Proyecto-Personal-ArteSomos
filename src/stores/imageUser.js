import { defineStore } from 'pinia'
import { ref } from 'vue';

export const imageUser = defineStore ('imageUser', () => {
	const userImageObject = ref([]);
	return userImageObject
})