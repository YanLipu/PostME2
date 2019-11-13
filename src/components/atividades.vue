<template>
    <div id="atividades">
        <h1>Atividades</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'atividades',
    methods: {
        postAtividade() {
            axios.post('http://localhost:3000/eventos')
                .then(res => {
                    console.log(res.data)
                })
        }
    }
}
</script>