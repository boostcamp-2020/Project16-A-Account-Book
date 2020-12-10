import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import ProfileImgList from '.';

export default {
  title: 'Molecules / ProfileImgList',
};

const imgList = [
  'https://img6.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P4.jpg',
  'http://mimg.segye.com/content/image/2020/03/12/20200312506832.jpg',
  'https://image.edaily.co.kr/images/photo/files/NP/S/2015/08/PS15081300024.jpg',
];

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <div style={{ width: '50rem', height: '30rem' }}>
        <ProfileImgList profileImgList={imgList} />
      </div>
    </GlobalThemeProvider>
  );
};
