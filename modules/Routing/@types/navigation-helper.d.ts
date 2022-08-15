declare namespace Routing {
  type NavigateParams = {
    to: string;
    query?: string | string[];
    reset?: boolean;
  };

  type NavigateFunction = (params: NavigateParams) => void;

  type NavigationHelper = {
    route: { name: string; query?: string | string[] };
    navigate: NavigateFunction;
    back: () => void;
  };
}
