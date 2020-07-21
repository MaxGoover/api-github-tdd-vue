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
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
  .user-profile {
    align-items: center;
    border-top: solid 1px #ccc;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
  }
  .user-profile__avatar {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
  .user-profile__name {
    font-family: 'Bungee', cursive;
    font-size: 24px;
    margin-top: 14px;
    text-transform: uppercase;
  }
  .user-profile__bio {
    font-family: 'Open Sans', sans-serif;
    margin-top: 14px;
  }
</style>