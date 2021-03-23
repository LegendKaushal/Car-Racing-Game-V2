class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  // checking and auto updatin for any previous data in database

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

//  updating playercount
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
// updating of player object with player index
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//static function -  notbound to specific  game object - only called using class name 
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
