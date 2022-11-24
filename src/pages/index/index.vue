<template>
  <div class="home">
    <div class="head">
      <div class="input">
        <input type="text" v-model.lazy="searchKey">
        <span class="clean" @click="clean">×</span>
      </div>
    </div>
    <div class="content">
      <div class="item" v-for="item in list" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import question from "../../config/question";

const searchKey = ref('');

const list = computed(() => {
  if (!searchKey.value) return []
  return question.filter(item => item.includes(searchKey.value));
})

function clean() {
  searchKey.value = ''
}
</script>

<style scoped lang="sass">
.home
  box-sizing: border-box
  min-height: 100vh
  background: #000
  .head
    width: 100%
    position: fixed
    left: 0
    top: 0
    background: #000
    border-bottom: 1px solid #eee
    overflow: hidden
    z-index: 9
  .input
    display: flex
    align-items: center
    width: calc(100% - 20px)
    margin: 10px
    height: 60px
    border: 1px solid #ddd
    background: #000
    &>input
      padding: 0 5px
      height: 100%
      flex: 1
      font-size: 18px
      color: #fff
    .clean
      padding: 10px
      font-size: 30px
      font-weight: bold
      color: #fff
  .content
    margin-top: 80px
    padding: 0 10px
    .item
      padding: 10px 0
      font-size: 18px
      color: #fff
</style>
