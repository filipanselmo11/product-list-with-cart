<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useDessertStore } from '../store/dessertStore';
import CardComponent from '../components/CardComponent.vue';
import CartCardComponent from '../components/CartCardComponent.vue';
import ModalComponent from '../components/ModalComponent.vue';
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

const modal = ref(false);

const modalCheck = ref(false);


const selectedDessert = ref<any>(null);

const openModal = (dessert: any) => {
    selectedDessert.value = dessert;
    modal.value = true;
};

const openCheckoutModal = () => {
    modalCheck.value = true;
};

const addDessertToCart = () => {
    if (selectedDessert.value) {
        dessertStore.addToCart(selectedDessert.value);
        closeModal();
    }
}

const closeModal = () => {
    modal.value = false;
};

const closeCheckModal = () => {
    modalCheck.value = false;
};

const cartItems = computed(() => dessertStore.cart);

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
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <h2 class="display-2 display-md-3 display-lg-4 text-center mb-3 mb-md-0">
                        Desserts
                    </h2>
                    <CartCardComponent :items="cartItems" @open-check-modal="openCheckoutModal()"
                        class="flex-shrink-1" />
                </div>
                <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3">
                    <div class="col">
                        <CardComponent :card="dessertStore.waffle" :src="waffleImage"
                            @click-button="openModal(dessertStore.waffle)" />
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.cremeBrulle" :src="cremeBrulleImage"
                            @click-button="openModal(dessertStore.cremeBrulle)" />
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.macaron" :src="macaronImage"
                            @click-button="openModal(dessertStore.macaron)" />
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.tiramisu" :src="tiramisuImage"
                            @click-button="openModal(dessertStore.tiramisu)" />
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.pistakio" :src="pistakioImage"
                            @click-button="openModal(dessertStore.pistakio)" />
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.meringue" :src="meringueImage"
                            @click-button="openModal(dessertStore.meringue)" />
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.cake" :src="cakeImage"
                            @click-button="openModal(dessertStore.cake)" />
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.brownie" :src="brownieImage"
                            @click-button="openModal(dessertStore.brownie)" />
                    </div>
                    <div class="col">
                        <CardComponent :card="dessertStore.panna" :src="pannaImage"
                            @click-button="openModal(dessertStore.panna)" />
                    </div>
                </div>
                <ModalComponent v-if="modal">
                    <div class="modal fade show d-block bg-light" tabindex="-1" style="--bs-bg-opacity: .5;">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h5 class="modal-title text-warning">
                                        Adicionando {{ selectedDessert?.name }} ao carrinho
                                    </h5>
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-close"
                                        @click="closeModal()"></button>
                                </div>
                                <div class="modal-body">
                                    <p class="text-white">
                                        Nome: {{ selectedDessert?.name }}<br />
                                        Categoria: {{ selectedDessert?.category }}<br />
                                        Preço: {{ selectedDessert?.price }}<br />
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" @click="closeModal()">
                                        Fechar
                                    </button>
                                    <button type="button" class="btn btn-success" @click="addDessertToCart()">
                                        Add ao carrinho
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalComponent>
                <ModalComponent v-if="modalCheck">
                    <div class="modal fade show d-block bg-light" tabindex="-1" style="--bs-bg-opacity: .5;">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h5 class="modal-title text-warning">
                                        Checkout
                                    </h5>
                                </div>
                                <div class="modal-body text-white">
                                    <ul>
                                        <li v-for="(item, index) in cartItems" :key="index">
                                            {{ item.name }} - {{ item.price }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" @click="closeCheckModal()">
                                        Cancelar
                                    </button>
                                    <button type="button" class="btn btn-success">
                                        Realizar compra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalComponent>
            </section>
        </div>
    </main>
</template>