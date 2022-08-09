type NavigateParams = {
  to: string;
  query?: NodeJS.Dict<string | string[]>;
  reset?: boolean;
};

export type NavigateFunction = (params: NavigateParams) => void;

export type NavigationHelper = {
  route: { name: string; query?: NodeJS.Dict<string | string[]> };
  navigate: NavigateFunction;
  back: () => void;
};
