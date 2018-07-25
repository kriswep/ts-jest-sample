import greeter from './greeter';

test('greets me', () => {
  expect(greeter('name')).toBe('Hello name!');
});
