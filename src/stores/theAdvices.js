import { defineStore } from 'pinia'
import { ref } from 'vue';

export const theAdvices = defineStore ('theAdvices', () => {
	const adviceObject = ref([]);
	return adviceObject;
})