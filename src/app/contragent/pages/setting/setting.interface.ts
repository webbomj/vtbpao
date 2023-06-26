export interface IUsersData {
  page: IUsersDataPage;
  users: IUsers[];
  data: IData[];
}

export interface IUsersDataPage {
  total: number;
  current: number;
  size: number;
}

export interface IUsers {
  id: number;
  name: string;
  email: string;
  phone: number;
  create_at: number;
  update_at: number;
}

export interface IData {
  user_id: number;
  is_admin: boolean;
  is_ecp: boolean;
  status: string;
}

export type ICompositionUser = IUsers | IData;
