<template>
    <div id="chat">
        <div class="q-pa-md">
            <div class="q-col-gutter-md row">
                <q-card flat bordered style="width: 100%; height: 600px; overflow-y: auto">
                    <q-card-section>
                        <q-chat-message
                        v-for="mensagem in chat"
                        :key="mensagem.user + mensagem.message"
                        :name="mensagem.user"
                        :text="[mensagem.message]"
                        :sent="souEu(mensagem)"
                        :avatar="souEu(mensagem) ? 'http://www.cippoweb.com.ar/wp-content/uploads/2018/08/desencanto-netflix-animacao-Matt-Groening-05-demonio.jpg' : 'http://placehold.it/180'"
                        stamp="4 minutes ago"
                        id="caixa_dialogo"
                        />
                    </q-card-section>
                    <q-separator />
                    <q-card-actions :vertical="false" class="row">
                        <div class="col-10">
                            <q-input filled v-model="mensagem" label="Digite sua mensagem" dense @keydown.enter="enviaMensagem()" />
                        </div>
                        <div class="col-2 text-right">
                            <q-btn icon="send" round size="12px" color="blue" clickable @click="enviaMensagem()"></q-btn>
                        </div>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios'
export default {
    name: 'chat',
    data() {
        return {
            mensagem: ''
        }
    },
    methods: {
        souEu(mensagem) {
            return this.quemSou.usuario === mensagem.user
        },
        enviaMensagem() {
            if (this.mensagem === '') return
            let mensagem = {
                user: this.quemSou.usuario,
                message: this.mensagem
            }

            axios.post('http://localhost:3000/chat', mensagem)
                .then(() => {
                    this.$store.dispatch('getChat')
                    this.mensagem = ''
                })
        }
    },
    mounted() {
        this.$store.dispatch('getChat')
    },
    computed: {
        ...mapGetters([
            'chat',
            'quemSou'
        ])
    }
}
</script>