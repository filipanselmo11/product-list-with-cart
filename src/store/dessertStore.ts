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
        cremeBrulle: {
            name: '' as string,
            category: '' as string,
            price: 0 as number
        },
        macaron: {
            name: '' as string,
            category: '' as string,
            price: 0 as number
        },
        tiramisu: {
            name: '' as string,
            category: '' as string,
            price: 0 as number
        },
        pistakio: {
            name: '' as string,
            category: '' as string,
            price: 0 as number
        },
        meringue: {
            name: '' as string,
            category: '' as string,
            price: 0 as number
        },
        loading: true,
    }),
    actions: {
        async getWaffle(): Promise<void> {
            try {
                this.loading = true;
                const response = await api.get('/0');
                this.waffle = response.data;
            } catch (error) {
                console.error('Erro ao carregar waffle', error);
            } finally {
                this.loading = false;
            }
        },

        async getCremeBrulle(): Promise<void> {
            try {
                this.loading = true;
                const response = await api.get('/1');
                this.cremeBrulle = response.data;
            } catch (error) {
                console.error('Erro ao carregar creme brulle', error);
            } finally {
                this.loading = false;
            }
        },

        async getMacaron(): Promise<void> {
            try {
                this.loading = true;
                const response = await api.get('/2');
                this.macaron = response.data;
            } catch (error) {
                console.error('Erro ao carregar macaron', error);
            } finally {
                this.loading = false;
            }
        },

        async getTiramisu(): Promise<void> {
            try {
                this.loading = true;
                const response = await api.get('/3');
                this.tiramisu = response.data;
            } catch (error) {
                console.error('Erro ao carregar tiramisu', error);
            } finally {
                this.loading = false;
            }
        },

        async getPistakio(): Promise<void> {
            try {
                this.loading = true;
                const response = await api.get('/4');
                this.pistakio = response.data;
            } catch (error) {
                console.error('Erro ao carregar pistakio', error);
            } finally {
                this.loading = false;
            }
        },

        async getMeringue(): Promise<void> {
            try {
                this.loading = true;
                const response = await api.get('/5');
                this.meringue = response.data;
            } catch (error) {
                console.error('Erro ao carregar meringue', error);
            } finally {
                this.loading = false;
            }
        },
    }
});