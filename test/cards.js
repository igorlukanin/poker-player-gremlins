const assert = require('assert');
const cards = require('../Cards.js');
describe('Cards', () => {
  it('should rank As Ad', () => {
      var score = cards.getHandScore([{rank:'A', suit:'spades'}, {rank:'A', suit:'hearts'}]);
      assert.equal(42, score);
  });
  it('should rank Qs Ks', () => {
      var score = cards.getHandScore([{rank:'Q', suit:'spades'}, {rank:'K', suit:'spades'}]);
      assert.equal(34, score);
  });
//   it('should getBorder', () => {
//       var score = cards.getBorder(cards.parseCards("Qs Ks"));
//       assert.equal(34, score);
//   });
});
