<template>
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
                    {{ stock.price | currency }}
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
                <h3 class="display-1 font-weight-light orange--text mb-2">Armor {{ stock.name }}</h3>
            </v-card-text>
            </v-card>
        </v-hover>
    </v-col>
</template>

<script>
export default {
    props: ['stock'],
    data: () => {
        return {

        }
    },

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