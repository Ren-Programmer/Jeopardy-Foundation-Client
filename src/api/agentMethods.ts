import { UseFormReturn } from "react-hook-form";
import { ServerErrorResult } from "./interfaces";

export function addServerErrors(
  serverErrorResult: ServerErrorResult,
  formHook: UseFormReturn<any, any>
) {
  serverErrorResult.errors.forEach((error) => {
    formHook.setError(error.propertyName.toLowerCase(), {
      type: "server",
      message: error.errorMessage,
    });
  });
}
