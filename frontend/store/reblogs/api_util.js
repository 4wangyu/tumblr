export const fetchReblog = reblogId => {
  return $.get({ url: '/api/reblogs', data: { id: reblogId } });
};

export const createReblog = data => {
  return $.reblog({ url: '/api/reblogs', data, contentType: false, processData: false });
};

export const updateReblog = reblog => {
  return $.ajax({ method: 'PATCH', url: `/api/reblogs/${reblog.id}`, data: { reblog } });
};

export const destroyReblog = reblogId => {
  return $.ajax({ method: 'DELETE', url: `/api/reblogs/${reblogId}` });
};