// we can't run any bootstrap script here because we need to hold
// page loading while our routines are being executed
// please check nextjs _app.tsx file
const BootstrapService = (props: any) => {
  return props.children;
};

export default BootstrapService;
