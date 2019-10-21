<template>
    <div>
        <h1>Stocks</h1>
         <h3>Weapon</h3>
        <v-row>
            <app-weapon v-for="(weapon) in weapons" :key="weapon.id" :stock="weapon"></app-weapon>
        </v-row>
        <h3>Armor</h3>
        <v-row>
            <app-armor v-for="(armor) in armors" :key="armor.id" :stock="armor"></app-armor>
        </v-row>

    </div>
</template>

<script>
import Weapon from './Weapon'
import Armor from './Armor'

export default {
    data() {
        return {
            armors: [
                {id: 0, name: 'Suit', price: 200},
                {id: 1, name: 'Hand', price: 100},
                {id: 2, name: 'Shoes', price: 100},
                {id: 3, name: 'Headpiece', price: 250},
            ]
        }
    },
    components: {
        appWeapon: Weapon,
        appArmor: Armor
    },
    computed: {
        weapons() {
            return this.$store.getters.weapons;
        },
    }
}
</script>

<style scoped>
   
</style>