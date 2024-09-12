import { defineStore } from "pinia";
import { api } from "../services/api";


// export interface Waffle {
//     image: {
//         thumbnail: string,
//         mobile: string,
//         tablet: string,
//         desktop: string
//     },
//     name: string,
//     category: string,
//     price: number
// }

// waffle: {
//     image: {
//         thumbnail: '' as string,
//         mobile: '' as string,
//         tablet: '' as string,
//         desktop: '' as string,
//     },
//     name: '' as string,
//     category: '' as string,
//     price: 0 as number
// },

export const useDessertStore = defineStore('dessertStore', {
    state: () => ({
        waffle: {
            name: '' as string,
            category: '' as string,
            price: 0 as number
        },
        loading: true,
    }),
    actions: {
        async getWaffles(): Promise<void> {
            this.loading = true;
            try {
                const response = await api.get('/0');
                this.waffle = response.data;
            } catch (error) {
                console.error('Erro ao carregar waffles', error);
            } finally {
                this.loading = false;
            }
        }
    }
});