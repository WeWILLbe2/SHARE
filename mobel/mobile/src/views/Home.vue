<template>
  <div class="home">
    <div class="top">
      <!-- <logins></logins> -->
      <van-icon name="manager-o" />
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
        <van-icon name="chat-o" />
      </mt-search>
    </div>
    <bottoms></bottoms>
  </div>
</template>
<script>
  // import HelloWorld from '@/components/HelloWorld.vue'
  import logins from '@/components/login.vue'

  export default {
    name: 'home',
    components: {
      // HelloWorld,
    },
    data() {
      return {}
    },
    methods: {

    }
  }
</script>
<style>


</style>