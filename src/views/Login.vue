<template>
    <q-page>
        <div id="login">
      <div class="q-pa-md">
        <div class="row">
          <div class="col-12 col-md-3 fixed-center">
            <q-card>
              <q-linear-progress indeterminate v-if="dadosLogin.isLogged" />
              <q-card-section class="text-center">
                <h4>PostME</h4>
              </q-card-section>

              <q-card-section>
                <q-form @submit="onSubmit" class="q-gutter-md">
                  <q-input
                    type="text"
                    v-model="email"
                    label="Usuário"
                    hint="Digite o nome do seu Usuário"
                    lazy-rules
                    bottom-slots
                    :error="error"
                  >
                    <template v-slot:error >
                        <span>Usuário inexistente</span>
                    </template>
                  </q-input>

                  <q-input
                    type="password"
                    v-model="senha"
                    label="Senha"
                    lazy-rules
                  />

                  <div class="text-right">
                    <q-btn
                      label="Entrar"
                      type="submit"
                      color="blue-7"
                      :loading="dadosLogin.isLogged"
                    >
                      <template v-slot:loading>
                        <q-spinner color="grey-10" size="1em" />
                      </template>
                    </q-btn>
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    </q-page>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    meta: {
    title: "PostME | Login"
  },
  data() {
    return {
      email: null,
      senha: null,
      dadosLogin: {
        isLogged: false
      },
      error: false
    };
  },
  methods: {
    onSubmit() {
        this.dadosLogin.isLogged = true
        this.error = false
      axios.get('http://localhost:3000/users')
        .then(res => {
            if (res.data[0].usuario === this.email && res.data[0].senha === this.senha) {
                    localStorage.setItem('isLogged', true)
                    this.error = false
                    setTimeout(() => {
                        this.dadosLogin.isLogged = false
                        this.$router.push('/home')
                    }, 1000)
                } else if (res.data[1].usuario === this.email && res.data[1].senha === this.senha) {
                    localStorage.setItem('isLogged', true)
                    this.error = false
                    setTimeout(() => {
                        this.dadosLogin.isLogged = false
                        this.$router.push('/home')
                    }, 1000)
                } else {
                    this.error = true
                    this.dadosLogin.isLogged = false
                    localStorage.setItem('isLogged', false)
                }
        })
    }
  }
}
</script>