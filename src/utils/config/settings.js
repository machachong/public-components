let settings = null;
export const systemId = 12;
export const systemTitle = import.meta.env.VUE_APP_NAME; // 系统名称
export const systemPre = import.meta.env.VUE_APP_PRE; // 系统缓存前缀
if (import.meta.env.NODE_ENV == 'development') {
  // 开发环境
  settings = {
    BASE_URL: 'http://172.19.65.158:8080/',
    dbv2_API_URL: 'http://172.19.64.144:8083/api',
    dbquery_API_URL: 'http://172.19.64.144:8083/dbquery/api',
    HOME_URL: 'http://172.19.64.144:8083',
    API_URL: 'http://172.18.14.193:8040',
    LOGIN_URL: 'http://172.19.64.144:8083/login',
    QIZHI_URL: 'https://172.18.5.50/shterm',
    BOKE_DB_URL: 'http://172.19.64.144:8083', // 老后台地址
  };
} else if (import.meta.env.NODE_ENV == 'production') {
  if (import.meta.env.VUE_APP_MODE == 'dev') {
    // 测试环境
    settings = {
      BASE_URL: 'http://172.18.14.191:8080/audit',
      dbv2_API_URL: 'http://172.18.14.191:8080/v2/api',
      HOME_URL: 'http://172.18.14.191:8080/v2',
      API_URL: 'http://172.18.14.191:8080/audit/api',
      LOGIN_URL: 'http://172.18.14.191:8080/v2/login',
      QIZHI_URL: 'https://172.18.5.50/shterm',
      BOKE_DB_URL: 'http://172.18.14.191:8080',
    };
  } else if (import.meta.env.VUE_APP_MODE == 'prod') {
    // 正式环境
    settings = {
      BASE_URL: 'https://dbmanage.987ht.net/audit',
      dbv2_API_URL: 'https://dbmanage.987ht.net/v2/api',
      HOME_URL: 'https://dbmanage.987ht.net/v2',
      API_URL: 'https://dbmanage.987ht.net/audit/api',
      LOGIN_URL: 'https://dbmanage.987ht.net/v2/login',
      QIZHI_URL: 'https://dbopm1.pocketcity.com/shterm',
      BOKE_DB_URL: 'https://dbmanage.987ht.net',
    };
  }
}

export default settings;
