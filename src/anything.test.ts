import { doIt } from './anything';
import * as TesteFile from './models/Teste';
import { Teste } from './models/Teste';

describe('test anything file', () => {
  it('should call execute on Test instance', () => {
    const mocked = jest.fn();
    const spy = jest.spyOn(TesteFile, 'Teste');
    spy.mockImplementationOnce(
      () => (({ execute: mocked, exec: jest.fn() } as unknown) as Teste)
    );

    doIt();

    expect(mocked).toHaveBeenCalled();
  });
});
