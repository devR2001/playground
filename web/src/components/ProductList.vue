<template>
    <div class="container px-3 py-6 prose">
        <h1 class="text-center">
            {{ $t("productList.productList") }}
        </h1>
    </div>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
                <p> {{ $t("productList.price") }} {{ product.price }} €</p>
                <p> {{ $t("productList.rating") }} {{ product.rating }}</p>
                <img :src="product.thumbnail" alt="Product Thumbnail">
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const products = ref([]);

const fetchProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        products.value = data.products;
    } catch (error) {
        console.error('Fehler beim Abrufen der Produkte:', error);
    }
};

onMounted(() => {
    fetchProducts();
});
</script>