import {request} from 'umi';

export async function doParents(module?: number) {
  return request<APIResponse.Response<any>>('/api/admin/site/permission/parents', {
    params: {module},
  });
}

export async function doCreate(params?: any) {
  return request<APIResponse.Response<any>>('/api/admin/site/permission', {
    method: 'POST',
    data: params,
  });
}

export async function doUpdate(id?: number, params?: any) {
  return request<APIResponse.Response<any>>(`/api/admin/site/permissions/${id}`, {
    method: 'PUT',
    data: params,
  });
}
