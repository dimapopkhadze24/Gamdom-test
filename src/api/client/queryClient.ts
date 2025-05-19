// src/queryClient.ts
import {
  Mutation,
  MutationCache,
  Query,
  QueryCache,
  QueryClient,
  QueryKey,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";

const globalErrorHandler = (error: AxiosError<{}>) => {
  enqueueSnackbar(error.response?.statusText || "Something went wrong", {
    variant: "error",
  });
};

const globalQueryErrorHandler = (
  error: AxiosError<{}>,
  query: Query<unknown, unknown, unknown, QueryKey>
) => {
  if (error.response?.status === 500) {
    globalErrorHandler(error);
    return error;
  }

  const handledError = query.meta?.handledError;

  if (!handledError) {
    globalErrorHandler(error);
  }

  return error;
};

const globalMutationHandler = (
  error: AxiosError<{}>,
  _variables: unknown,
  _context: unknown,
  mutation: Mutation<unknown, unknown, unknown, unknown>
) => {
  if (error.response?.status === 500) {
    globalErrorHandler(error);
    return error;
  }

  const handledError = mutation.options.meta?.handledError;

  if (!handledError) {
    globalErrorHandler(error);
  }

  return error;
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: globalQueryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: globalMutationHandler,
  }),
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});
