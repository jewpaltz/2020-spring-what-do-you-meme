<template>
  <div class="buttons">
      <div v-if="CurrentUser">
          Welcome {{CurrentUser.Name}}
      </div>
      <div v-else>
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        CurrentUser: Object
    }
}
</script>

<style>

</style>