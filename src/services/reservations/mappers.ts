import { RequestParams, RequestParamsParsed } from './types'

export const mapRequestParams = ({
  page,
  perPage,
  sortBy,
  orderBy,
  query,
  status,
  shift,
  area,
  date,
}: RequestParamsParsed): RequestParams => ({
  _page: page,
  _limit: perPage,
  _sort: sortBy,
  _order: orderBy,
  q: query || undefined,
  status: status || undefined,
  shift: shift || undefined,
  area: area || undefined,
  businessDate: date || undefined,
})
