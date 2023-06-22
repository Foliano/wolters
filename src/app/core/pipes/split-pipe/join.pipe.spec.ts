import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should join string array with default join symbol', () => {
    const stringArr = ['Dajcie', 'mnie', 'te', 'prace'];
    const expectedResult = 'Dajcie | mnie | te | prace';
    const result = pipe.transform(stringArr);
    expect(result).toEqual(expectedResult);
  });

  it('should join string array with custom join symbol', () => {
    const stringArr = ['Test', 'test2'];
    const customJoinSymbol = ' - ';
    const expectedResult = 'Test - test2';
    const result = pipe.transform(stringArr, customJoinSymbol);
    expect(result).toEqual(expectedResult);
  });

  it('should return an empty string if the input array is empty', () => {
    const stringArr: string[] = [];
    const expectedResult = '';
    const result = pipe.transform(stringArr);
    expect(result).toEqual(expectedResult);
  });
});