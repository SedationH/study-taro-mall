import request from '../utils/request';
import Api from '../config/api';

/**
 *  首页数据接口
 */
export async function getIndex() {
  console.log('开始请求')
  return request.get(Api.IndexUrl);
}
