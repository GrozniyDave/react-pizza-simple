import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={277}
      height={460}
      viewBox="0 0 277 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="288" rx="4" ry="4" width="260" height="26" />
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="325" rx="4" ry="4" width="260" height="78" />
      <rect x="0" y="415" rx="4" ry="4" width="80" height="40" />
      <rect x="120" y="415" rx="10" ry="10" width="140" height="40" />
    </ContentLoader>
  );
};

export default Skeleton;
