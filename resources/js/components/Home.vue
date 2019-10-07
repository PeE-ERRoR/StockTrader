<template>
    <div>
        <h1>Trader or View your Portfolio</h1>
        <h4>you may Save & Load your Data</h4>
        <h4>Click on 'End Day' to begin aNew Day!</h4>
        <v-divider></v-divider>
        <p class="display-1">Your Funds: {{ funds | currency }}</p>
        <hr>
        <v-text-field v-model="myStyle.backgroundColor"></v-text-field>
        <div :style="myStyle"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myStyle: {
                width: '100px',
                height: '100px',
                backgroundColor: 'green',
            }
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>