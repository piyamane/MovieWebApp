import { NumberWithCommasPipePipe } from './number-with-commas-pipe.pipe';

describe('NumberWithCommasPipePipe', () => {
  it('create an instance', () => {
    const pipe = new NumberWithCommasPipePipe();
    expect(pipe).toBeTruthy();
  });
});
