// src/queryClient.ts
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

// const handleAxiosError = (error: unknown) => {
//   if (!isAxiosError<{ ErrorMessage: string; ErrorCode: string }>(error)) return;

//   const { message, response } = error;
//   const errorCode = response?.data.ErrorCode;
//   const errorMessage = response?.data.ErrorMessage;

//   const exceptionalCodes = [
//     "IncorrectKeywordException",
//     "UserRegionRestricted",
//     "AllSpotsTaken",
//     "UserIsNotAnActiveException",
//   ];

//   if (message === "maintenance") {
//     document.dispatchEvent(new CustomEvent("maintenance-error"));
//   } else if (!exceptionalCodes.includes(errorCode || "")) {
//     showCustomToast(errorMessage);
//   }
// };

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: () => {},
  }),
  mutationCache: new MutationCache({
    onError: () => {},
  }),
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});
