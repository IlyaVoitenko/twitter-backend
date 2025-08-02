type typeErrorStatus = {
  [key: number]: string;
};
type typeError = {
  status: number | string;
  name: string;
};
const errorMessageList: typeErrorStatus = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const httpError = (status: number, message?: string) => {
  const error = new Error(
    message || errorMessageList[status] || "Server error"
  );
  error.name = "HttpError";
  (error as typeError & Error).status = status;
  return error;
};

export default httpError;
