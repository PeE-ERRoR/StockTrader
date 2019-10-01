<template>
    <div>
        <h1>Portfolio</h1>
        <v-row>
            <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock"></app-stock>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock';
    export default {
        components: {
            appStock: Stock
        },
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        }
    }
</script>