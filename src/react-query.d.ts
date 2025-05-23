import "@tanstack/react-query";
import { AxiosError } from "axios";

interface QueryMeta {
  handledError?: boolean;
}

interface MutationMeta {
  handledError?: boolean;
}

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError<{}>;
  }

  interface QueryMeta extends QueryMeta {}
  interface MutationMeta extends MutationMeta {}
}
