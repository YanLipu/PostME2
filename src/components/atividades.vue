<template>
    <div id="atividades">
        <q-list class="rounded-borders">
            <q-item-label header>Lista de Atividades {{eventos && eventos.length === 0 ? ' Vazia.' : ''}}</q-item-label>

            <span v-for="(evento, i) in eventos" :key="evento.data + 't' + i">
                <q-item class="bg-orange-5 text-white" style="border-radius: 5px">
                    <q-item-section top>
                    <q-item-label lines="1">
                        <span class="text-weight-medium">{{evento.nome}}</span>
                        <span class=""> - {{evento.data}}</span>
                    </q-item-label>
                    <q-item-label caption lines="1" class="text-white">
                        {{evento.descricao}}
                    </q-item-label>
                    </q-item-section>

                    <q-item-section top side>
                    <div class="text-white q-gutter-xs">
                        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="deleteAtividade(evento.id)" />
                    </div>
                    </q-item-section>
                </q-item>
            </span>
        </q-list>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
import {Notify} from 'quasar'
export default {
    name: 'atividades',
    methods: {
        deleteAtividade(index) {
            axios.delete('http://localhost:3000/eventos/' + index)
                .then(() => {
                    this.$store.dispatch('getAtividades')
                    Notify.create({
                        message: 'Atividade removida com Sucesso!',
                        color: "green",
                        position: "top-right"
                    });
                })
        }
    },
    computed: {
        ...mapGetters([
            'eventos'
        ])
    }
}
</script>