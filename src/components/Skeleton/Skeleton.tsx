import { SkeletonProps } from './Skeleton.types';

export const Skeleton: React.FC<SkeletonProps> = ({ classNames }) => {
  return <div className={`animate-pulse bg-gray-300 ${classNames}`}></div>;
};
