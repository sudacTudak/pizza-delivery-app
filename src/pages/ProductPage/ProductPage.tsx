import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';

function ProductPage() {
  const params = useParams();
  return <>id: {params.id}</>;
}

export default ProductPage;
