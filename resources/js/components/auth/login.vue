<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
             <v-btn  v-on="on">
                Login
            </v-btn>
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" v-model="email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field {{ token }}</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="login">Login</v-btn>
          <v-btn color="blue darken-1" text @click="logout">LogOut</v-btn>
        </v-card-actions>
        
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
    import axios from 'axios'
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
            login() {
                axios.post('/api/login', {
                    email: this.email,
                    password: this.password
                })
                .then((response) => {
                    console.log(response);
                    this.token = response.data.success.token
                    this.getUser();
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            getUser() {
                axios.defaults.headers.common['Authorization'] = 'Bearer '+this.token;
                axios.post('/api/getUser', {
                    email: this.email,
                    password: this.password
                })
                .then((response) => {
                    console.log(response);
                })
            },
            logout() {
                axios.post('/logout')
                .then((response) => {
                    console.log(response);
                })
            }
        }
    }
</script>