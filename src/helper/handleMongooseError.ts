type MongooseError = {
  name: string;
  code: number;
  status?: number;
};

const handleMongooseError = (error: MongooseError, next: () => void) => {
  const { name, code } = error;
  const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  error.status = status;
  next();
};

export default handleMongooseError;
