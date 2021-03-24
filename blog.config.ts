import { IBlogConfig } from '@/types';

const config: IBlogConfig = {
  host: 'localhost',
  port: 9000,
  enableHTTPS: true,
  mongoUrl: `mongodb://116.62.106.70:27017/iBlog_v2`,
  jwtSecret: 'myblogjsonwebtokensecretkey'
};

export default config;
