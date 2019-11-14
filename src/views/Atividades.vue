<template>
    <q-page>
        <div class="q-pa-md">
            <div class="q-col-gutter-md row">
                <div class="col-12 col-s12">
                    <q-card>
                        <q-card-section>
                            <q-list class="rounded-borders">
                                <q-item-label header>Lista de Atividades</q-item-label>

                                <span v-for="(evento, i) in eventos" :key="evento.data + 't' + i">
                                    <q-item>
                                        <q-item-section top>
                                        <q-item-label lines="1">
                                            <span class="text-weight-medium">{{evento.nome}}</span>
                                            <span class="text-grey-8"> - {{evento.data}}</span>
                                        </q-item-label>
                                        <q-item-label caption lines="1">
                                            {{evento.descricao}}
                                        </q-item-label>
                                        </q-item-section>
                                    </q-item>

                                    <q-separator spaced />
                                </span>
                            </q-list>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'atividades-publico',
    computed: {
        ...mapGetters([
            'eventos'
        ])
    },
    mounted() {
        this.$store.dispatch('getAtividades')
    }
}
</script>