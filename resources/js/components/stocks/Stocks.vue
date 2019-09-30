<template>
    <div>
        <h1>Stocks</h1>
        <v-row>
            <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock"></app-stock>
        </v-row>
    </div>
</template>
<script>
import Stack from './stock.vue';
export default {
    data() {
        return {
            stocks:[
                { id: 1, name: 'Orb', price: 110 },
                { id: 2, name: 'Sword', price: 120 },
                { id: 3, name: 'Blade', price: 310 },
                { id: 4, name: 'Katana', price: 250 },
            ]
        }
    },
    components: {
        appStock: Stack
    }
}
</script>