<template>
  <div>
    <h1>新型冠状病毒</h1>
    <p>实时动态</p>
    <p class="auth">by Karin</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  created() {
  }
}
</script>

<style lang="scss" scoped>
  div {
    width: 100%;
    background: url('../assets/header-bg.png') no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
  }
  h1 {
    margin: 20px 0 10px;
  }
  .auth {
    margin-top: 10px;
    text-align: right;
  }
</style>