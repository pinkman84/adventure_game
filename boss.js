var Boss = function(name, health, megaAttack ){
  this.name = name;
  this.health = health;
  this.megaAttack = megaAttack;
}

Boss.prototype = {
  intro: function(){
    var intro = ("Bring it on")
    return intro
  },

  lightAttack: function(target){
    if(target.health <= 0){
      target.died
    }
    else{
    var damage = target.health -= 15
    return damage}
  },

  heavyAttack: function(target){
    if(target.health <= 0){
      target.died
    }
    else{
    var damage = target.health -= 20}
  },

  died: function(){
    var deathTags = ["Its just a flesh wound", "Tis but a scratch", "Ive had worse, come on you pansy!!"]
      var dead = deathTags[Math.floor(Math.random() * deathTags.length)]
      return dead
    }
}


boss1 = new Boss('One Eyed Hank', 50, 'Shotgun Wedding');
boss2 = new Boss('machine gun Eddie', 1000, 'tommy gun');

boss2.heavyAttack(boss1);
console.log(boss1.health);
boss2.heavyAttack(boss1);
console.log(boss1.health);
boss2.heavyAttack(boss1);


module.exports = Boss;







