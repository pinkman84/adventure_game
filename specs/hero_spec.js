var hero = require('../hero');
var food = require('../food');
var assert = require('chai').assert;


describe('game tests', function(){
  beforeEach(function(){
     hero1 = new hero('Aidan', 100, 'Ham');
     hero2 = new hero('Steven', 100, 'Chicken');
     food1 = new food('Ham', 30);
     food2 = new food('Chicken', 30);

  })

  it('should talk', function(){
    // console.log(hero1.intro())
    assert.equal('Hello, my name is Aidan', hero1.intro())
  })

  it('should increase in health', function(){
    hero1.eat(food2)
    assert.equal(130, hero1.health)
  })

  it('should increase in health plus bonus', function(){
    hero2.eat(food2)
    assert.equal(145, hero2.health)
  })

})