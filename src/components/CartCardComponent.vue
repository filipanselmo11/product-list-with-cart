<script lang="ts" setup>

const props = defineProps<{
    items: any[]
}>();

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
                        <button
                            type="button"
                            :disabled="props.items.length <= 0"
                            class="btn btn-secondary"
                            @click="removerItem()">
                            Remover item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>