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
            <v-btn text to="/">Stock Trader</v-btn>
            <v-btn text to="/portfolio">Portfolio</v-btn>
            <v-btn text to="/stocks">Stocks</v-btn>
            <v-menu
                bottom
                origin="center center"
                transition="scale-transition">
                <template v-slot:activator="{ on }">
                    <v-btn
                    color=""
                    dark
                    v-on="on">
                    Scale Transition
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    click="">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>

        <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon>
                <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
            <span>{{ funds | currency }}</span>
            <v-btn icon>
                <v-icon>mdi-export-variant</v-icon>
            </v-btn>
        </template>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
  </script>