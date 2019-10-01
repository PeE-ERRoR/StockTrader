<template>
    <div>
        <h1>Stocks</h1>
        <v-row>
            <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock"></app-stock>
        </v-row>
    </div>
</template>
<script>
import Stock from './Stock';
export default {
    data() {
        return {
        }
    },
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        },
    }
}
</script>