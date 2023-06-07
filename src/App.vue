<template>
  <NavBarField></NavBarField>
  <router-view />
  <!-- 这个router-view 我查了30min bug -->
</template>

<script>
// import ContentField from './components/ContentField.vue'
import NavBarField from './components/NavbarField.vue'
export default {
  components: {
    NavBarField,
  }

}
</script>

<style></style>
