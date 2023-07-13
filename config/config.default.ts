import { EggAppConfig, PowerPartial } from 'egg';
// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  keys: string
}

export default () => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;
  config.keys = '123456';
  return config;
};
