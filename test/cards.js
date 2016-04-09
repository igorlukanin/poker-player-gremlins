const assert = require('assert');
const cards = require('../Cards.js');
const Probs = require('../Probs.js');

describe('Cards', () => {
  it('should rank As Ad', () => {
      var score = cards.getHandScore([{rank:'A', suit:'spades'}, {rank:'A', suit:'hearts'}]);
      assert.equal(42, score);
  });
  it('should rank Qs Ks', () => {
      var score = cards.getHandScore([{rank:'Q', suit:'spades'}, {rank:'K', suit:'spades'}]);
      assert.equal(34, score);
  });
});

describe('Probs', () => {
  it('AA', () => {
      var score = Probs.getProb(2, cards.parseCards("As Ah"));
      assert.equal(85.3, score);
  });
  it('AT', () => {
      var score = Probs.getProb(2, cards.parseCards("As Th"));
      assert.equal(62.9, score);
  });
  it('AT * 10', () => {
      var score = Probs.getProb(10, cards.parseCards("As Th"));
      assert.equal(13.4, score);
  });
});
