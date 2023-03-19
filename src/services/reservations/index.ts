import { api } from '../api'
import { mapRequestParams } from './mappers'
import { ReservationList, RequestParamsParsed } from './types'

export const endpoints = {
  reservations: 'reservations',
}

export const getReservations = async (
  params: RequestParamsParsed
): Promise<ReservationList> => {
  const parsedParams = mapRequestParams(params)

  const response = await api.reservations.get(endpoints.reservations, {
    params: parsedParams,
  })

  return {
    list: response.data,
    pagination: {
      page: params.page,
      totalRecords: response.headers['x-total-count'],
    },
  }
}
