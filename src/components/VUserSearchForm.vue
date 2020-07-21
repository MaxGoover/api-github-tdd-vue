<template>
  <form @submit.prevent="$emit('submitted', username)">
    <el-input
      v-model="username"
      class="search-form__input"
      placeholder="Enter username"
    >
      <el-button
        class="search-form__button"
        icon="el-icon-search"
        native-type="submit"
        slot="append"
      />
    </el-input>
  </form>
</template>

<script>
export default {
  name: 'VUserSearchForm',
  data() { return { username: '' } }
}
</script>

<style scoped>

</style>