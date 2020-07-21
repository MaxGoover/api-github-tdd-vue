<template>
  <div>
    <h1>VUserSearchForm</h1>
    <form @submit.prevent="$emit('submitted', username)">
      <input v-model="username" type="text"/>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'VUserSearchForm',
  data() { return { username: '' } }
}
</script>

<style scoped>

</style>