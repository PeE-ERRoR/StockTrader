<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">
          Register
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="first name*" required v-model="firstName"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="last name*" required v-model="lastName"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" v-model="email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Confirm Password*" type="password" required v-model="confirmPassword"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Age" v-model="age"></v-text-field>
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
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="register">Submit</v-btn>
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
                confirmPassword: "12345678",
                firstName: "Error",
                lastName: "",
                age: "",
            }
        },
        methods: {
          ...mapActions([
            'signup'
          ]),
          register() {
              const formData = {
                  email: this.email,
                  password: this.password,
                  confirmPassword: this.confirmPassword,
                  firstName: this.firstName,
                  lastName: this.lastName,
                  age: this.age
              }
              this.signup(formData);
          },
        }
    }
</script>