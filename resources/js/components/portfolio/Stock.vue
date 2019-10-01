<template>
    <v-col md="4">
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
                class="white--text"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            <v-card-title class="align-end fill-height">Weapon {{ stock.name }}</v-card-title>
            </v-img>

            <v-card-text>
                <span>Price: {{ stock.price | currency }}</span><br>
                <span class="text--primary">
                    <span>Quantity: {{ stock.quantity }}</span><br>
                    <span>Whitsunday Island, Whitsunday Islands</span>
                </span>
            </v-card-text>
             
            <v-card-actions>
                <v-text-field
                    type="text"
                    class="pr-3"
                    clearable
                    v-model="quantity"
                    label="Quantity"></v-text-field>
                <v-btn
                    right
                    color="orange darken-3"
                    @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity * 1)"
                >
                    {{ insufficientQuantity ? 'not enough' : 'Sall' }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data: () => ({
        quantity: 0
        }),
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                // this.$store.dispatch('sellStock', order);
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>