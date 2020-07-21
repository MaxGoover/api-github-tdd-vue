<template>
  <div class="user-profile">
    <h1>VUserProfile</h1>
    <img class="user-profile__avatar" :src="user.avatar_url" />
    <div class="user-profile__name">
      {{ user.name }}
    </div>
    <div class="user-profile__bio">
      {{ user.bio }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VUserProfile',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>