<template>
  <div class="list_all">
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
              :items="all_emoji"
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
                  <v-checkbox
                          primary
                          hide-details
                          v-model="item.isFavorit"
                          off-icon="mdi-heart-outline"
                          on-icon="mdi-heart"
                  ></v-checkbox>
              </td>
              <td class="dop_td">
                <v-icon @click="deleteItem(item)" >mdi-delete</v-icon>
              </td>
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
        all_emoji(){
            return this.$store.getters.ALL_EM;
        }
    },

    methods: {
        deleteItem(item) {
            const index = this.all_emoji.indexOf(item);
            this.$store.dispatch('DELETE_EM', index);
        }
    }
}
</script>

<style >
    .v-card__subtitle, .v-card__text, .v-card__title {
        padding: 0 16px !important;
    }
    .v-text-field {
         padding-top: 0 !important;
    }
    .img_preview{
        height: 25px;
    }
    .img_preview:hover{
        transition: 0.5s;
        height: 64px;
    }
    .v-input--selection-controls{
        margin-top: 0px !important;
        padding-top: 0px !important;
    }
    .theme--light.v-data-table tbody tr:not(:last-child) td:last-child {
        width: 153px !important;
    }
    .theme--light.v-data-table thead th:last-child {
        padding-left: 33px !important;
    }
    .dop_td{
        border-bottom: 0 !important;
    }
</style>