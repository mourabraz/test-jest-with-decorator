import { doIt } from './anythingWithDecorators';

const mockExecute = jest.fn();
const TesteWithDecoratorStub = () => ({
  execute: mockExecute
})

jest.mock('tsyringe', () =>  ({
  injectable: jest.fn(),
  container: {
    resolve: () => TesteWithDecoratorStub(),
  }
}));

describe('test anything file', () => {
  it('should call execute on Test instance', () => {

    doIt();

    expect(mockExecute).toHaveBeenCalled();
  });
});
