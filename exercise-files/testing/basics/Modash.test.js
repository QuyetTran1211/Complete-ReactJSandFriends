// We write the tests for the Modash library in
// this file in the Unit Testing chapter


// import Modash from "./Modash";

// const string = 'there was one catch, and that was CATCH-22';
// const actual = Modash.truncate(string, 19);
// const expected = 'there was one catch...';



// if(actual !== expected) {
//   console.log(
//     `[FAIL] Expected \`truncate()\` to return '${expected}', got '${actual}'`
//   );
// } else {
//   console.log('[PASS] `truncate()`.');
// }

/* let actual;
let expected;
let string;

function assertEqual(description, actual, expected) {
  if(actual === expected){
    console.log(`[PASS] ${description}`);
  }else {
    console.log(`[FAIL] ${description}`);
    console.log(`\tactual:'${actual}'`);
    console.log(`\texpected:'${expected}'`);
  }
}


// function assertEqual(description, actual, expected) {
//   if(actual.length <= expected.length ){
//     console.log(`[PASS] ${description}` );
//   }else {
//     console.log(`[FAIL] ${description}`);
//   }
// }

// ------- Assertion for capitalize----------

// function assertEqual(description, actual, expected) {
//   if(actual === expected){
//     console.log(`[PASS] ${description}`);
//   }else {
//     console.log(`[FAIL] need to ${description}`);
//   }
// }

// ----------- Assertions for camelCase------------
string = 'there was one catch, and that was CATCH-22';
actual = Modash.truncate(string, string.length);
expected = string;
assertEqual('`truncate()`: no-ops if <= length', actual, expected)

actual = Modash.capitalize(string);
expected = 'There was one catch, and that was catch-22';
assertEqual('`capitalize()`: capitalizes the string', actual, expected);

string = 'customer_responded_at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';
assertEqual('`capitalize()`: capitalizes the string', actual, expected);

string = 'customer_responded_at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';
assertEqual('`camelCase()`: string with underscores', actual, expected);

describe('My test suite', () => {
  it('`true` should be `true`', () => {
    expect(true).toBe(true);
  })
})

it('`false` should be `fasle`', () => {
  expect(false).toBe(false);
}) */

import Modash from './Modash';

describe('Modash', () => {
  // assertions will go here 

  it('`truncate()`: truncate a string', () => {
    const string = 'there was one catch, and that was CATCH-22';
    expect(
      Modash.truncate(string, 19)
    ).toEqual('there was one catch...');
  });

  it('no-ops if <= length', () => {
    expect(
      Modash.truncate(string, string.length)
    ).toEqual(string);
  })
});

describe('Modash', ()=> {
  describe('`truncate()`', () => {
    const string = 'there was once catch, and that was CATCH-22';
  });
});

