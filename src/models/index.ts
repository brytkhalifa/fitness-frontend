export interface UserCredential {
  email: string;
  password: string;
}
export interface Token  {
  token: string | null;
  refresh_token: string | null;
}


export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

