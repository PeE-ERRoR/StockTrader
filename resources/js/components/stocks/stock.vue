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
                <span>Price: {{ stock.price }}$</span><br>
                <span class="text--primary">
                    <span>Whitehaven Beach</span><br>
                    <span>Whitsunday Island, Whitsunday Islands</span>
                </span>
                <!-- <v-text-field
                    label="Quantity"
                    solo
                    clearable
                    v-model="quantity"
                 ></v-text-field> -->
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
                    color="green"
                    @click="buyStock"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity * 1)"
                >
                    Buy
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
  export default {
    props: ['stock'],
    data: () => ({
      quantity: 0
    }),
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            console.log(order);
            this.quantity = 0;
        }
    }
  }
</script>