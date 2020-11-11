import { useGetData } from '../../hooks/useGetData';

export default function Index() {
  const { uploadedFiles } = useGetData(['uploadedFiles']);
  console.log(uploadedFiles);
  return <div></div>;
}
