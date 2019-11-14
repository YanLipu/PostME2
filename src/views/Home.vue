<template>
  <q-page>
    <div id="home">
      <div class="q-pa-md">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-8">
            <q-card style="min-height: 95vh">
              <q-card-section>
                <q-btn label="Nova Atividade" icon="add" clickable @click="$store.commit('OpenAtividade', true)" class="bg-blue-7 text-white"></q-btn>
                <q-btn label="Sair" icon="logout" clickable @click="sair()" flat color="primary" style="float: right"></q-btn>
              </q-card-section>

              <q-card-section>
                <atividades />
                <nova-atividade />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card style="min-height: 95vh">
              <q-card-section>
                 <div class="text-h6">Chat</div>
              </q-card-section>

              <q-card-section>
                <chat />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import chat from '@/components/chat'
import atividades from '@/components/atividades'
import novaAtividade from '@/components/nova-atividade'
export default {
  name: 'home',
  components: {
    chat,
    atividades,
    novaAtividade
  },
  methods: {
    sair() {
      this.$store.commit('quemSou', {})
      this.$router.push('/login')
      localStorage.setItem('isLogged', false)
    }
  },
  mounted() {
    this.$store.dispatch('getAtividades')
  }
}
</script>
