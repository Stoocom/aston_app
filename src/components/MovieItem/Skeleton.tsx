import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={260}
    height={580}
    viewBox="0 0 260 580"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="4" y="47" rx="2" ry="2" width="99" height="17" />
    <rect x="3" y="496" rx="2" ry="2" width="71" height="17" />
    <rect x="3" y="82" rx="2" ry="2" width="260" height="400" />
    <rect x="185" y="496" rx="2" ry="2" width="71" height="17" />
    <rect x="2" y="531" rx="5" ry="5" width="134" height="30" />
  </ContentLoader>
);

export default MyLoader;
