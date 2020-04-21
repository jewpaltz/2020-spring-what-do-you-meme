<template>
  <div class="container">
      <div class="card">
        <div class="card-content">
            <h1 class="title is-1">
                Game Page
            </h1>
        </div>
      </div>

      <div class="card">
      <div class="card-content">
        <ul>
          <li v-for="player in Game.State.Players" :key="player.Name">
            {{player.Name}} {{player.Score}}
          </li>
        </ul>
      </div>

      <img :src="Game.State.CurrentPicture"  class="card-image"/>
    </div>

  </div>
</template>

<script>
import Game from "../models/Game";


export default {
  name: 'Home',
  created(){
    Game.Init();
    Game.Start();
  },
  destroyed(){
    Game.Pause();
  },
  data:()=>({
    Game
  })
}
</script>

<style >
  img.card-image {
    width: 100%
  }
</style>