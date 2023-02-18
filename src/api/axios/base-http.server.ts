import AxiosService from "./axios-service";
import { cloneDeep, omit, assign } from "lodash-es";
import { ResponseData } from "./../../types";

export default class BaseHttpService extends AxiosService {
  async get(endpoint: string, params?: any): Promise<ResponseData> {
    let paramsData = {};
    if (params && params.page && params.page_size) {
      const data = cloneDeep(params);
      const pager = {
        page: data.page,
        pageSize: data.pageSize,
      };

      const pagerParams = { pager: JSON.stringify(pager) };
      const remainderParams = omit(data, ["page", "pageSize", "options"]);

      paramsData = assign(pagerParams, data.options, remainderParams);
    } else {
      paramsData = params;
    }
    return this.service.get(endpoint, { params: paramsData });
  }

  async post(endpoint: string, params?: any): Promise<ResponseData> {
    let postData = {};
    if (params && params.page && params.pageSize) {
      const data = cloneDeep(params);

      const pager = {
        page: data.page,
        pageSize: data.pageSize,
      };
      const pagerParams = { pager: pager };

      const remainderParams = omit(data, ["page", "pageSize", "options"]);
      postData = assign(
        pagerParams,
        { options: data.options },
        remainderParams
      );
    } else {
      postData = params;
    }
    return this.service.post(endpoint, postData);
  }
}
