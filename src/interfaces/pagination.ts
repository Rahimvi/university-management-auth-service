// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type IPaginationOption = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};
