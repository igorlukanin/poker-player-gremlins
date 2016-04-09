const assert = require('assert');
const cards = require('../Cards.js');
describe('Cards', () => {
  it('should rank As Ad', () => {
      var score = cards.getHandScore([{rank:'A', suit:'spades'}, {rank:'A', suit:'hearts'}]);
      console.log(score);
      assert(42, score);
  });
  it('should rank Qs Ks', () => {
      var score = cards.getHandScore([{rank:'Q', suit:'spades'}, {rank:'K', suit:'spades'}]);
      console.log(score);
      assert(31, score);
  });
});
