<template>
  <div class="container">
    <div id="app">
      <transition name = "fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6e6e6b;
  font-size: 1.05rem;
}

h1 {
  font-weight: normal;
  margin: 0 0 0 0;
  color: white;
  width:100%;
  background-color: #42b983;
}

 h2 {
  font-weight: normal;
  margin: 0 0 0 0;
  width: max-content;
  text-decoration: underline #42b983;
}

a {
  color: #42b983;
  cursor: pointer;
}

.small-table{
    display: block;
    margin:0 auto;
    max-height: 22vh;
    overflow: scroll;
}

table{
    text-align: center;
    width: 100%;
    margin-bottom: 5vh;
}

input[type=text] {
    background-color: white;
    background-image: url('/billing-splitter/dist/user-silhouette.png');
    background-position: 5px 5px;
    background-repeat: no-repeat;
    padding-left: 30px;
    line-height: 1.4rem;
    font-size : 1.1rem;
    border: 2px solid #42b983;
    border-radius: 4px;
}

button {
    background-color: #42b983;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    margin: 4px 2px;
    font-size : 1.1rem;
    cursor: pointer;
}

@import 'assets/css/smallbs.css';
@import 'assets/css/transition.css';

</style>
