<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      clipped
      width="200"
      permanent
      expand-on-hover
      color="grey darken-4"
      class="transparent"
    >
      <v-list dense
        class="tile"
      >
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/cases">
          <v-list-item-action>
            <v-icon>mdi-folder-open</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Consult cases</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/settings">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link  to="/about">
          <v-list-item-action>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="grey darken-4"
      clipped-left
    >
      <img :src="require('@/assets/logo.svg')" class="mt-2 mr-1" height="100"/>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon to="/login">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
    <router-view/>
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
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>

<style scoped>
.transparent {
   opacity: 0.90;
   border-color: transparent!important;
 }
  .tile {
    margin: 5px;
    border-radius: 4px;
  }
  .tile:hover {
    color: red;
  }
</style>
