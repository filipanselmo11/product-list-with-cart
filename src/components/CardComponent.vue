<script lang="ts" setup>

interface CardProps {
    name: string,
    category: string,
    price: number
};

const props = defineProps<{
    card: CardProps,
    src: string
}>();

const emit = defineEmits<{
    (e: 'clickButton'): void;
}>();

const emitClickButton = () => {
    emit('clickButton');
};

</script>

<template>
    <div class="card d-flex flex-column h-100">
        <img :src="props.src" class="card-img-top" :alt="props.card.name">
        <div class="card-body bg-dark text-white d-flex flex-column justify-content-between">
            <p class="h6 text-warning">
                {{ props.card.name }}
            </p>
            <p class="card-text">
                {{ props.card.category }}
            </p>
            <p class="card-text text-danger">
                R$ {{ props.card.price }}
            </p>
            <button class="btn btn-light w-100 w-sm-auto" type="button" @click="emitClickButton()">
                Add to cart
            </button>
        </div>
    </div>
</template>