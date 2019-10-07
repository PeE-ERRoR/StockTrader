<template>
    <v-app>
        <app-header></app-header>
        <v-container>
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
         </v-container>
    </v-app>
</template>

<script>
    import Header from './Header.vue';
    export default {
        components: {
            'appHeader' : Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style scoped>
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-20px);
            opacity: 0px;
        }
        to {
            transform:translateY(0px);
            opacity: 1px;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
            opacity: 1px;
        }
        to {
            transform: translateY(-20px);
            opacity: 0px;
        }
    }
</style>