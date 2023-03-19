// response from the server
export interface ReservationItem {
  id: number
  businessDate: string
  status: string
  shift: string
  start: string
  end: string
  quantity: number
  customer: {
    firstName: string
    lastName: string
  }
  area: string
  guestNotes: string
}

export interface ReservationList {
  list: ReservationItem[]
  pagination: {
    page: number
    totalRecords: number
  }
}

export interface RequestParams {
  _page: number
  _limit: number
  _sort: string
  _order: string
  q: string | undefined
  status: string | undefined
  shift: string | undefined
  area: string | undefined
  businessDate: string | undefined
}

export interface RequestParamsParsed {
  page: number
  perPage: number
  sortBy: string
  orderBy: string
  query?: string
  status?: string
  shift?: string
  area?: string
  date?: string
}
