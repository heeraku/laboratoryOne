<template>
  <div>
    <!-- <h1>{{ count }}</h1>
    <button @click="addNumber(1)">증가</button>
    <button @click="minusNumber">감소</button>
    <button @mouseover="addNumber(10)">마우스오버10증가</button> -->
    <h2>{{ message }}</h2>
    <button @click="addNumber($event, 10)">10더하기</button>
    <button @click="addNumber($event, 100)">100더하기</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      count: 0,
      message: "hahaha",
    }
  },
  methods: {
    getMousePosition(event){
      this.message = `마우스의 위치는 ${event.pageX},${event.pageY} 입니다.`;
    },
    greeting(){
      this.message = "안녕하세요";
    },
    sayGoodbye(){
      this.message = "잘가~~~~~";
    },
    addNumber(e, value) {
      this.message = `마우스 좌표 ${e.pageX}와 더하기 ${value}는 ${e.pageX + value}입니다.`
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  width: 100px;
  height: 100px;
  font-size: 24px;
}
.box{
  width: 300px;
  height: 300px;
  background: salmon;
}
</style>
