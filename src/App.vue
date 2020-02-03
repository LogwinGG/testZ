<template>
  <v-app>
    <v-navigation-drawer
            v-model="drawer"
            app
    >
      <v-list dense>
        <v-list-item link to="/" @click="title = 'Все'">
          <v-list-item-action>
            <v-icon>mdi-notification-clear-all</v-icon>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title>Все</v-list-item-title>

          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/favorite" @click="title = 'Любимые'">
          <v-list-item-action>
            <v-icon>mdi-heart-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Любимые</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/deleted" @click="title = 'Удаленные'">
          <v-list-item-action>
            <v-icon>mdi-delete-sweep-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Удаленные</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            color="dark"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container

      >
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer
            color="dark"
            app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: null,
    title: 'Все'
  }),
};
</script>
