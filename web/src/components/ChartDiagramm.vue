<template>
    <div class="height flex items-center justify-center mt-12">
        <canvas ref="myChart"></canvas>

    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement } from 'chart.js';

const myChart = ref(null);

onMounted(() => {
    Chart.register(CategoryScale, LinearScale, BarController, BarElement, DoughnutController, ArcElement);

    const data = {
        labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai'],
        datasets: [
            {
                label: 'Umsatz',
                data: [1500, 2000, 1200, 2500, 1800, 1],
                backgroundColor: 'yellowgreen',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai'],
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    const ctx = myChart.value.getContext('2d');
    new Chart(ctx, {
        type: 'bar', 
        data: data,
        options: options,
    });
});
</script>
  
<style scoped>
canvas {
    max-width: 1200px;
    max-height: 600px;
}
</style>
  