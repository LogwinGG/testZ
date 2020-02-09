<template>
  <div class="list_favorite">
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
            :headers="headers"
            :items="all_emojis"
            :items-per-page="15"
            :search="search"
            sort-by="name"
            class="elevation-1"
    >
      <template v-slot:item.preview="{ item }" >
        <img :src="item.url" class="img_preview">
      </template>

      <template v-slot:item.action="{ item }" >
        <td class="dop_td">
          <v-icon @click="deleteItem(item)" >mdi-delete</v-icon>
        </td>
      </template>

      <template v-slot:no-data>
        <h2>Нет избранных эмоджи(</h2>
      </template>

    </v-data-table>
  </div>
</template>

<script>
  export default {

    data: () => ({
      search: '',
      headers: [
        { text: 'Имя', value: 'name', align: 'left'},
        { text: 'Ссылка', value: 'url', filterable: false, sortable: false},
        { text: 'Превью', value: 'preview', filterable: false, sortable: false},
        { text: 'Действия', value: 'action', filterable: false, sortable: false,},
      ],
    }),

    computed: {
      all_emojis(){
        return this.$store.getters.ALL_EM.filter(item => item.isFavorit == true);
      }
    },

    methods: {
      deleteItem(item) {
        const index = this.all_emojis.indexOf(item)
        this.all_emojis[index].isFavorit = false;
      }
    }
  }
</script>