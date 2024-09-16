<script lang="ts" setup>

const props = defineProps<{
    items: any[]
}>();

const emit = defineEmits<{
    (e: 'openCheckModal'): void;
}>();

const emitOpenCheckModal = () => {
    emit('openCheckModal');
};

const removerItem = () => {
    if (props.items.length > 0) {
        props.items.pop();
    }
};

</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <div class="card bg-dark">
                    <div class="card-header text-white text-center">
                        Seu carrinho
                    </div>
                    <div class="card-body text-white text-center">
                        <div v-if="props.items.length === 0">
                            <span>
                                Carrinho sem itens
                            </span>
                        </div>
                        <div v-else>
                            <ul>
                                <li v-for="(item, index) in props.items" :key="index">
                                    {{ item.name }} - {{ item.price }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-footer text-white text-center">
                        <div class="d-grid gap-2 d-md-block">
                            <button
                                class="btn btn-secondary me-3"
                                type="button"
                                :disabled="props.items.length <= 0"
                                @click="removerItem()">
                                    Remover Item
                            </button>
                            <button
                                class="btn btn-success"
                                type="button"
                                :disabled="props.items.length <= 0"
                                @click="emitOpenCheckModal()">
                                    Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>