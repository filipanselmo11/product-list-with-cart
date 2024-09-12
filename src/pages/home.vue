<script lang="ts" setup>
import { onMounted } from 'vue';
import { useDessertStore } from '../store/dessertStore';
import CardComponent from '../components/CardComponent.vue';
import waffleImage from '../assets/images/image-waffle-desktop.jpg';
import cremeBrulleImage from '../assets/images/image-creme-brulee-desktop.jpg';
import macaronImage from '../assets/images/image-macaron-desktop.jpg';
import tiramisuImage from '../assets/images/image-tiramisu-desktop.jpg';
import pistakioImage from '../assets/images/image-baklava-desktop.jpg';
import meringueImage from '../assets/images/image-meringue-desktop.jpg';

const dessertStore = useDessertStore();

onMounted(() => {
    dessertStore.getWaffle();
    dessertStore.getCremeBrulle();
    dessertStore.getMacaron();
    dessertStore.getTiramisu();
    dessertStore.getPistakio();
    dessertStore.getMeringue();
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
                <h2 class="h2 display-2">
                    Desserts
                </h2>
                <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3">
                    <div class="col">
                        <CardComponent :card="dessertStore.waffle" :src="waffleImage">
                            Add to cart
                        </CardComponent>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.cremeBrulle" :src="cremeBrulleImage">
                            Add to cart
                        </CardComponent>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.macaron" :src="macaronImage">
                            Add to cart
                        </CardComponent>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.tiramisu" :src="tiramisuImage">
                            Add to cart
                        </CardComponent>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.pistakio" :src="pistakioImage">
                            Add to cart
                        </CardComponent>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.meringue" :src="meringueImage">
                            Add to cart
                        </CardComponent>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>