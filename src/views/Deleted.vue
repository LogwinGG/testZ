<template>
    <div class="list_deleted">
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
                :items="deleted_emojis"
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
                    <v-icon @click="recoveryItem(item)" >mdi-plus mdi-rotate-45</v-icon>
                </td>
            </template>

            <template v-slot:no-data>
                <h2>Нет удаленных</h2>
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
            deleted_emojis(){
                return this.$store.getters.DELETED_EM;
            }
        },

        methods: {
            recoveryItem(item) {
                const index = this.deleted_emojis.indexOf(item);
                this.$store.dispatch('RECOVERY_EM', index);
            }
        }
    }
</script>
