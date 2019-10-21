<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn  v-on="on">
                Login
            </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*" v-model="email"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                dialog: false,
                email: "pee.error404@gmail.com",
                password: "12345678",
                token: ""
            }
        },
        methods: {
            ...mapActions({
              signin: 'signin'
            }),
            login() {
                const formData = {
                  email: this.email,
                  password: this.password
                }
                this.signin(formData)
            },
        }
    }
</script>