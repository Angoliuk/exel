export type User = {
  createdAt: string;
  email: null | string;
  name: null | string;
  photo: null | string;
  teamId: null | string;
  uid: string;
};

export type CreateUser = {
  email: null | string;
  name: null | string;
  photo: null | string;
  teamId: null | string;
  uid: string;
};

export type Team = {
  createdAt: string;
  name: string;
  ownerId: string;
};

export type CreateTeam = {
  name: string;
  ownerId: string;
};
