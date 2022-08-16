// intl polyfill
import "intl";
import "intl/locale-data/jsonp/en";
import "intl/locale-data/jsonp/pt-BR";

// Re-export the root component from the Next.js website
// as the root component for the native React app.
export { default } from "@/modules/App";
