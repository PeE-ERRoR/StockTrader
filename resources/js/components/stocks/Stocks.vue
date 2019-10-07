<template>
    <div>
        <h1>Stocks</h1>
        <v-row>
            <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock"></app-stock>
        </v-row>
        <v-row>
            <v-col md="4">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                    >
                    <v-img
                        :aspect-ratio="16/9"
                        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                    >
                        <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                        >
                            $14.99
                        </div>
                        </v-expand-transition>
                    </v-img>
                    <v-card-text
                        class="pt-6"
                        style="position: relative;"
                    >
                        <v-btn
                        absolute
                        color="orange"
                        class="white--text"
                        fab
                        large
                        right
                        top
                        >
                        <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
                        <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
                        <div class="font-weight-light title mb-2">
                        Our Vintage kitchen utensils delight any chef.<br>
                        Made of bamboo by hand
                        </div>
                    </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
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

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }
</style>