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

</script>

<template>
    <div class="card d-flex flex-column h-100">
        <img :src="props.src" class="card-img-top" :alt="props.card.name">
        <div class="card-body bg-dark text-white d-flex flex-column justify-content-between">
            <span>
                {{ props.card.name }}
            </span>
            <p class="card-text">
                {{ props.card.category }}
            </p>
            <p class="card-text">
                {{ props.card.price }}
            </p>
            <button
                class="btn btn-primary w-100 w-sm-auto"
                type="button">
                    <slot></slot>
            </button>
        </div>
    </div>
</template>