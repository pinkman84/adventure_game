var hero = require('../hero');
var rat = require('../rat');
var food = require('../food');
var boss = require('../boss');
var assert = require('chai').assert;


describe('game tests', function(){
  beforeEach(function(){
     hero1 = new hero('Ser Jaime', 100, 'Ham', {name: "Hidden Blade", damage: 40});
     hero2 = new hero('Ser Beric', 100, 'Chicken', {name: "flame sword", damage: 50});
     food1 = new food('Ham', 30);
     food2 = new food('Chicken', 30);
     rat1 = new rat('Roland', 10);
     boss1 = new boss('The Black Knight', '200', {name: 'Rabbit of Caerbannog', damage: 99})
  })

  it('should talk', function(){
    // console.log(hero1.intro())
    assert.equal('Hello, my name is Ser Jaime', hero1.intro())
  })

  it('should increase in health', function(){
    hero1.eat(food2)
    assert.equal(130, hero1.health)
  })

  it('should increase in health plus bonus', function(){
    hero2.eat(food2)
    assert.equal(145, hero2.health)
  })

  it('rat can poison food', function(){
    rat1.touchFood(food1)
    assert.equal(true, food1.poisoned)
  })

  it('poisoned food should damage hero', function(){
    rat1.touchFood(food1)
    hero1.eat(food1)
    assert.equal(85, hero1.health)
  })

  it('should have a light attack', function(){
    assert.equal(90, hero1.lightAttack(hero2))
  })

  it('should have a strong attack', function(){
    assert.equal(85, hero2.heavyAttack(hero1))
  })

  it('boss should have a mega attack that can almost one hit kill you', function(){
    assert.equal(99, boss1.megaAttack.damage)
  })

})