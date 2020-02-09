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
      <v-container>
        <router-view>
            <!--views-->
        </router-view>
      </v-container>
    </v-content>

    <v-footer
            color="dark"
            app
    >
      <span class="white--text">2020</span>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  mounted(){
    if (localStorage.getItem('cache')) {
      try {
        const obj = JSON.parse(localStorage.getItem('cache'));

        this.$store.commit('SET_EMOJI', obj[0]);
        this.$store.commit('SET_EM_DEL', obj[1] );

      } catch(e) {
        localStorage.removeItem('cache');
      }
    } else {
      this.$store.dispatch('DOWNLOAD_EMOJI');
    }

  },
  updated(){
      let all_em = this.$store.getters.ALL_EM;
      let deleted_em = this.$store.getters.DELETED_EM;

      const obj = {
          0:all_em,
          1:deleted_em
      };

      const parsed = JSON.stringify(obj);
      localStorage.setItem('cache', parsed);
  },

  data: () => ({
    drawer: null,
    title: 'Все'
  }),
};
</script>
