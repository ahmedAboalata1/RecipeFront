import { PipetestsPipe } from './pipetests.pipe';

describe('PipetestsPipe', () => {
  it('create an instance', () => {
    const pipe = new PipetestsPipe();
    expect(pipe).toBeTruthy();
  });
});
