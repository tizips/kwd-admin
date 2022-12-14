import {request} from 'umi';

export async function doPaginate(params: any) {
  return request<APIResponse.Response<any>>('/api/admin/web/projects', {params});
}

export async function doDelete(id?: string) {
  return request<APIResponse.Response<any>>(`/api/admin/web/projects/${id}`, {
    method: 'DELETE',
  });
}

export async function doEnable(data: APIWebProjects.Enable) {
  return request<APIResponse.Response<any>>('/api/admin/web/project/enable', {
    method: 'PUT',
    data: data,
  });
}
