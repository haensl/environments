describe('@haensl/environments', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('import via full uri', () => {
    const environments = require('@haensl/environments');

    it('exposes development', () => {
      expect(environments.development)
      .toEqual('development');
    });

    it('exposes production', () => {
      expect(environments.production)
        .toEqual('production');
    });

    it('exposes qa', () => {
      expect(environments.qa)
        .toEqual('qa');
    });

    it('exposes test', () => {
      expect(environments.test)
        .toEqual('test');
    });
  });

  describe('spread import', () => {
    const { qa }  = require('@haensl/environments');

    it('exposes qa', () => {
      expect(qa)
        .toEqual('qa');
    });
  });
});
