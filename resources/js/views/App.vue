<template>
    <v-app>
        <app-header></app-header>
        <v-container>
            <router-view></router-view>
         </v-container>
    </v-app>
</template>

<script>
    import Header from './Header.vue';
    export default {
        components: {
            'appHeader' : Header
        }
    }
</script>