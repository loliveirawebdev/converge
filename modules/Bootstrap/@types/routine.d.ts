interface Routine {
  name: string;
  action: (context: any, ...args: any) => void;
}
