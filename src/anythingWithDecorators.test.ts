import { doIt } from './anythingWithDecorators';

const mockExecute = jest.fn();
const TesteWithDecoratorStub = () => ({
  execute: mockExecute
})

const list: { [name: string]:  any} = {
  TesteWithDecorator: TesteWithDecoratorStub,
}

jest.mock('tsyringe', () =>  ({
  injectable: jest.fn(),
  container: {
    resolve: (ClassType: any) => (list[ClassType.name])(),
  }
}));

describe('test anything file', () => {
  it('should call execute on TestWithDecorators instance', () => {

    doIt();

    expect(mockExecute).toHaveBeenCalled();
  });
});
