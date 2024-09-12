<script lang="ts" setup>
import { onMounted } from 'vue';
import { useDessertStore } from '../store/dessertStore';
import CardComponent from '../components/CardComponent.vue';
import CartCardComponent from '../components/CartCardComponent.vue';
import waffleImage from '../assets/images/image-waffle-desktop.jpg';
import cremeBrulleImage from '../assets/images/image-creme-brulee-desktop.jpg';
import macaronImage from '../assets/images/image-macaron-desktop.jpg';
import tiramisuImage from '../assets/images/image-tiramisu-desktop.jpg';
import pistakioImage from '../assets/images/image-baklava-desktop.jpg';
import meringueImage from '../assets/images/image-meringue-desktop.jpg';
import cakeImage from '../assets/images/image-cake-desktop.jpg';
import brownieImage from '../assets/images/image-brownie-desktop.jpg';
import pannaImage from '../assets/images/image-panna-cotta-desktop.jpg';

const dessertStore = useDessertStore();

const addToCart = () => {
    alert('Doce adicionado ao cart');
};

onMounted(() => {
    dessertStore.getWaffle();
    dessertStore.getCremeBrulle();
    dessertStore.getMacaron();
    dessertStore.getTiramisu();
    dessertStore.getPistakio();
    dessertStore.getMeringue();
    dessertStore.getCake();
    dessertStore.getBrownie();
    dessertStore.getPanna();
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
                <div class="d-flex justify-content-between mb-5">
                    <h2 class="h2 display-2">
                        Desserts
                    </h2>
                    <CartCardComponent/>
                </div>
                <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3">
                    <div class="col">
                        <CardComponent :card="dessertStore.waffle" :src="waffleImage" @click-button="addToCart()"/>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.cremeBrulle" :src="cremeBrulleImage" @click-button="addToCart()"/>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.macaron" :src="macaronImage" @click-button="addToCart()"/>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.tiramisu" :src="tiramisuImage" @click-button="addToCart()"/>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.pistakio" :src="pistakioImage" @click-button="addToCart()"/>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.meringue" :src="meringueImage" @click-button="addToCart()"/>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.cake" :src="cakeImage" @click-button="addToCart()"/>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.brownie" :src="brownieImage" @click-button="addToCart()"/>
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.panna" :src="pannaImage" @click-button="addToCart()"/>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>