<template>
  <div id="app">
    <div id="nav">
<!--      <router-link to="/">Все</router-link> |-->
<!--      <router-link to="/elect">Избранные</router-link>-->
<!--      <router-link to="/deleted">Удаленные</router-link>-->
      <v-card
              height="400"
      >
        <v-navigation-drawer
                absolute
                dark
        >
          <v-list
                  dense
                  nav
                  class="py-0"
          >


            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>


    <router-view/>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        color: 'primary',


      }
    }
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
