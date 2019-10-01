<template>
    <div>
        <h1>Trader or View your Portfolio</h1>
        <h4>you may Save & Load your Data</h4>
        <h4>Click on 'End Day' to begin aNew Day!</h4>
        <v-divider></v-divider>
        <p class="display-1">Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>