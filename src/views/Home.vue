<template>
  <q-page>
    <div id="home">
      <div class="q-pa-md">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-8">
            <q-card style="height: 95vh">
              <q-card-section>
                <q-btn label="Nova Atividade" icon="add" class="bg-blue-7 text-white"></q-btn>
                <!-- <div class="text-h6">
                  Atividades
                </div>
                
              <div class="text-subtitle2">Lorem Ipsum ...</div> -->
              </q-card-section>

              <q-card-section>
                <atividades />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card style="height: 95vh">
              <q-card-section>
                 <div class="text-h6">Chat</div>
              <div class="text-subtitle2">Lorem Ipsum ...</div>
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
export default {
  name: 'home',
  components: {
    chat,
    atividades
  },
  data() {
    return {
      nome: '',
      data: '',
      descricao: ''
    }
  }
}
</script>
