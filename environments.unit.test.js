const { environments } = require('./');

describe('@haensl/environments', () => {
  it('contains environment "development"', () => {
    expect(environments.development)
      .toEqual('development');
  });

  it('contains environment "qa"', () => {
    expect(environments.qa)
      .toEqual('qa');
  });

  it('contains environment "production"', () => {
    expect(environments.production)
      .toEqual('production');
  });

  it('contains environment "test"', () => {
    expect(environments.test)
      .toEqual('test');
  });
});
