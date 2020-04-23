<template>
  <div class="container">

            <h1 class="title is-3">
                Game Page
            </h1>


    <div class="columns">
      <div class="column is-one-third">
        <div class=""> 
          <ul class="panel">
            <li class="panel-heading">Players</li>
            <li v-for="player in Game.State.Players" :key="player.Name" class="panel-block">
              {{player.Name}} {{player.Score}}
            </li>
          </ul>
        </div>
      </div>
      
      <img :src="Game.State.CurrentPicture"  class="card column"/>
      
    </div>
    <div class="columns">

      <div class="column is-one-third">
        <div class="">
          <ul class="panel">
            <li class="panel-heading">My Cards</li>
            <li v-for="card in Game.MyCards" :key="card" class="panel-block">
              {{card}} 
            </li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="">
          <ul  class="panel">
            <li class="panel-heading">Cards In Play</li>
            <li v-for="card in Game.State.CardsInPlay" :key="card.Text"  class="panel-block">
              {{card.Text}}, {{card.PlayerId}}, {{card.IsChosen}} 
            </li>
          </ul>
        </div>
      </div>
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