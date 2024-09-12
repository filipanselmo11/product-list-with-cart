<script lang="ts" setup>
import { onMounted } from 'vue';
import { useDessertStore } from '../store/dessertStore';
import CardComponent from '../components/CardComponent.vue';


const dessertStore = useDessertStore();

const waffleImage = `@/assets/images/image-waffle-desktop.jpg`;

onMounted(() => {
    dessertStore.getWaffles()
});

</script>

<template>
    <main class="container mt-5">
        <div v-if="dessertStore.loading" class="d-flex justify-content-center">
            <h2>
                Carregando os doces...
            </h2>
        </div>
        <div v-else>
            <section id="desserts">
                <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3">
                    <div class="col">
                        <CardComponent :card="dessertStore.waffle" :src="waffleImage">
                            Add to cart
                        </CardComponent>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>