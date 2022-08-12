declare namespace Routing {
  type NavigateParams = {
    to: string;
    query?: NodeJS.Dict<string | string[]>;
    reset?: boolean;
  };

  type NavigateFunction = (params: NavigateParams) => void;

  type NavigationHelper = {
    route: { name: string; query?: NodeJS.Dict<string | string[]> };
    navigate: NavigateFunction;
    back: () => void;
  };
}
