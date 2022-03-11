<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 
  <!-- v-model练习 -->
  <div>
    <h1>{{ name }}</h1>
    <input v-model="name" type="text">
  </div>

  <!-- v-bind练习 -->
  <div>
     <button v-bind:disabled="isEnable">v-bind练习</button>
  </div>

  <!-- v-on练习 -->
  <div>
    <button v-on:click="clickButton">v-on练习</button>
  </div>

  <!-- v-on加v-if联合练习 -->
  <div>
    <h1 v-if="isDisplay">v-if和v-on练习</h1>
    <button v-on:click="clickDisplay">v-if和v-on练习</button>
  </div>

  <!-- v-if练习 -->
  <div>
    <input type="text" v-model="score">
    <h1 v-if="score >= 90">优秀</h1>
    <h1 v-else-if="score >= 80">良好</h1>
    <h1 v-else-if="score >= 60">及格</h1>
    <h1 v-else-if="score >= 0">不及格</h1>
    <h1 v-else>输出参数不正确</h1>
  </div>

  <!-- v-show练习 -->
 <div>
    <input type="text" v-model="score">
    <h1 v-show="score >= 90 && score <= 100">优秀</h1>
    <h1 v-show="score >= 80 && score < 90">良好</h1>
    <h1 v-show="score >= 60 && score < 80">及格</h1>
    <h1 v-show="score >= 0 && score < 60">不及格</h1>
  </div>

  <!-- v-for练习 -->
  <div>
    <ul>
      <li style="display: block" v-for="(item,index) in hosts" :key="item.ip">{{ index }}-{{ item.name }}-{{ item.ip }}</li>
    </ul>
  </div>

  <!-- computed练习 -->
  <h1>Reverse: {{ reverseName }}</h1>

  <!-- filter练习 -->
  <h1>{{ ts | parseTime }}</h1>

  <!-- directive练习 -->
  <input v-focus type="text">

    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    clickButton() {
      alert("v-on练习")
    },
    clickDisplay(){
      this.isDisplay = !this.isDisplay
    }
  },
  computed:{
    reverseName: {
      get(){
        return this.name.split("").reverse().join("")
      },
      set(val) {
        this.name = val.split("").reverse().join("")
      }
    }
  },
  watch:{
    urlHash: function(newurl,oldurl){
      console.log(newurl,oldurl)
    }
  },
  filters:{
    // parseTime(ts){
    //   let date = new Date(ts)
    //   return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    // }

  },
  directives:{
    // focus: {
    //   inserted: function(el){
    //   el.focus()
    // }}
  },
  data(){
    return {
      name: "aaaa",
      isEnable: false,
      isDisplay: true,
      score: -1,
      hosts: [
        { name: "host01",
          ip: "192.168.1.1"
        },
        {name :"host02",
          ip: "192.168.1.2"
        }
      ],
        urlHash: window.location.hash,
      ts: Date.now()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
