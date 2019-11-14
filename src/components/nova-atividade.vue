<template>
    <q-dialog v-model="OpenAtividade" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">Nova Atividade</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="$store.commit('OpenAtividade', false); nome = ''; descricao = ''; data = '14/11/2019'" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
              <div class="q-col-gutter-md row">
                    <div class="col-12 col-s12">
                        <q-input filled v-model="nome" label="Nome da Atividade" />
                    </div>
                    <div class="col-12 col-s12">
                        <q-input filled v-model="descricao" label="Descrição da Atividade" />
                    </div>
                    <div class="col-12 col-s12">
                        <q-input @click="$refs.qDateProxy.show()" filled v-model="data" label="Data da Atividade">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date v-model="data" @input="() => $refs.qDateProxy.hide()" mask="DD/MM/YYYY" :locale="langDate" />
                                </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
              </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="primary" @click="$store.commit('OpenAtividade', false); nome = ''; descricao = ''; data = '14/11/2019'" />
            <q-btn flat label="Salvar" class="bg-green text-white" @click="salvarAtividade(); nome = ''; descricao = ''; data = '14/11/2019'" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import axios from 'axios'
import {Notify} from 'quasar'
export default {
    name: 'nova-atividade',
    data() {
        return {
            nome: '',
            data: '14/11/2019',
            descricao: '',
            langDate: {
                days: "Domingo_Segunda-Feira_terça-Feira_Quarta-Feira_Quinta-Feira_Sexta_Sábado".split(
                "_"
                ),
                daysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outrubro_Novembro_Dezembro".split(
                "_"
                ),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
                "_"
                ),
                firstDayOfWeek: 1
            }
        }
    },
    methods: {
        salvarAtividade() {
            let atividade = {
                nome: this.nome,
                data: this.data,
                descricao: this.descricao
            }
            axios.post('http://localhost:3000/eventos', atividade)
                .then(res => {
                    Notify.create({
                        message: res.data.nome + ' Adicionada com Sucesso!',
                        color: "green",
                        position: "top-right"
                    });
                    this.$store.commit('OpenAtividade', false)
                    this.$store.dispatch('getAtividades')
                })
                .catch(() => {
                    Notify.create({
                        message: 'Não foi possível adicionar a Atividade!',
                        color: "red",
                        position: "top-right"
                    });
                })
        }
    },
    computed: {
        OpenAtividade: {
            get() {
                return this.$store.getters.OpenAtividade
            },
            set() {}
        }
    }
}
</script>