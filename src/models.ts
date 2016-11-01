export interface IUser {
  id: string,
  name: string,
  username: string,
  email: string,
  group_id: number
}

export interface IGroup {
  id: string,
  name: string
}

export interface IHttpResult {
  ok: boolean,
  rows?: any,
  err?: any
}
