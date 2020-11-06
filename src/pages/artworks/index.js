import React from 'react';
import { useGetData } from '../../hooks/useGetData';

export default function Index() {
  const data = useGetData(['uploadedFiles', 'users']);
  console.log(data);
  return <div></div>;
}
