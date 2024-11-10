import { AxiosError } from 'axios';
import { useRouteError } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function ErrorPage() {
  const error = useRouteError();
  const errMessage =
    error instanceof Error || error instanceof AxiosError
      ? error.message
      : JSON.stringify(error);

  return <ErrorMessage message={errMessage} />;
}

export default ErrorPage;
