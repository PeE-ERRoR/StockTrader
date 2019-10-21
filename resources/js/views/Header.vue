<template>
  <div>
    <v-toolbar>
        <v-toolbar-title>
            <v-avatar>
                <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
        </v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
            <v-btn v-if="auth" text to="/dashbord">Stock Trader</v-btn>
            <v-btn v-if="auth" text to="/portfolio">Portfolio</v-btn>
            <v-btn text to="/">Stocks</v-btn>
            <v-btn @click="endDay">End Day</v-btn>
            <v-menu
                v-if="auth"
                bottom
                origin="center center"
                transition="scale-transition">
                <template v-slot:activator="{ on }">
                    <v-btn
                    color=""
                    dark
                    v-on="on">
                    Save & Load
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="saveData">
                      <v-list-item-title>Save</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="loadData">
                      <v-list-item-title>Load</v-list-item-title>
                    </v-list-item>
                </v-list>
                <!-- <v-list>
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    @click="saveData">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list> -->
            </v-menu>
            <app-login v-if="!auth"></app-login>
            <app-register v-if="!auth"></app-register>
        </v-toolbar-items>

        <template v-if="auth">
            <v-btn icon>
                <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
            <span>{{ funds | currency }}</span>
            <v-btn
              icon
              @click="logout">
                <v-icon>mdi-export-variant</v-icon>
            </v-btn>
        </template>
    </v-toolbar>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import Login from '../components/auth/Login'
  import Register from '../components/auth/Register'

  export default {
    data: () => ({
      items: [
        { title: 'Save' },
        { title: 'Load' },
      ],
    }),
    computed: {
      funds() {
        return this.$store.getters.funds
      },
      auth() {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData',
        userLogout: 'logout'
      }),
      endDay() {
        this.randomizeStocks()
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        }
        this.$http.put('data.json', data)
      },
      loadData() {
        this.fetchData()
      },
      logout() {
        this.userLogout()
      }
    },
    components: {
      'appLogin': Login,
      'appRegister': Register
    }
  }
  </script>