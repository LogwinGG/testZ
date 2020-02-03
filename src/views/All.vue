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
              :items="emojis"
              :search="search"
              sort-by="name"
              class="elevation-1"
      >
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
<!--          <template v-slot:no-data>-->
<!--              <v-btn color="primary" @click="initialize">Reset</v-btn>-->
<!--          </template>-->
      </v-data-table>

      <div>

      </div>
  </div>
</template>

<script>
    const axios = require('axios');


export default {

    data: () => ({
        search: '',
        headers: [
            { text: 'Имя', value: 'name', align: 'left'},
            { text: 'Ссылка', value: 'url', filterable: false, sortable: false},
            { text: 'Превью', value: 'preview', filterable: false, sortable: false},
            { text: 'Действия', value: 'action', filterable: false, sortable: false,},
        ],
        emojis: [],

        emojisJSON: null
    }),

    mounted() {
        axios.get('https://api.github.com/emojis')
            .then(response => (this.emojisJSON = response.data))
        // eslint-disable-next-line no-console
    },
    updated(){
        this.$nextTick(function () {
            const obj = this.emojisJSON;
            for (let key in obj ){
                console.log(  `${key}   : ${ obj[key] } `);

                //this.emojis.push({ name: key  ,url: value, isFavorit: false  })
            }
        })

    },


    methods: {

        initialize() {
            this.emojis = [
                {
                    name: '00000000',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: true
                },
                {
                    name: 'F1t',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: true
                },
                {
                    name: '2t',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: false
                },
                {
                    name: 'F3',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: true
                },
                {
                    name: '4ozen Yogurt',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: false
                },
                {
                    name: 'F5urt',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: false
                },
                {
                    name: '7rt',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: false
                },
                {
                    name: 'Frozen 8',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: true
                },
                {
                    name: '9en Yogurt',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: false
                },
                {
                    name: 'Fro10rt',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG',
                    isFavorit: false
                },
                {
                    name: 'Fro11gurt',
                    url: 'https://asdf8080/sadf/2/sdf/332/werdsfd/1.img',
                    preview: 'IMG ',
                    isFavorit: true
                },

            ]
        },
        addItemFavorite(item) { // для отладки, впринцепе больше не нужен
            const index = this.desserts.indexOf(item)
            // eslint-disable-next-line no-console
            console.log(this.desserts[index].isFavorit);
        },
        deleteItem(item) {
            // eslint-disable-next-line no-console,no-unused-vars
            const index = this.desserts.indexOf(item)

            // КОД переноса ИЗ основного масива В масив УДАЛЕННЫЙХ

            // eslint-disable-next-line no-console
            console.log(index);
        }
    }
}
</script>

<style>
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