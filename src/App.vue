<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link  to="/about">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="grey darken-3"
      clipped-left
    >
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img :src="require('./assets/logo.svg')" class="mt-2 mr-3" height="100"/>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
    <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app padless>
      <v-card-text class="py-2 white--text text-center">
        Copyright &copy; {{ new Date().getFullYear() }} <strong>IntellST.</strong> All Rights Reserved
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
