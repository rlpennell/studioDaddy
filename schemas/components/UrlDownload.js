import React, { useEffect, useState } from 'react';
import { studioClient } from '../../lib/utils/studioClient';

const UrlDownload = props => {
  const [link, setLink] = useState();

  useEffect(() => {
    const getLink = async () => {
      await studioClient
        .fetch(`*[_id == $id][0].url`, {
          id: props.parent.file.asset._ref,
        })
        .then(setLink);
    };

    getLink();
  }, []);

  return (
    <>
      <a href={`${link}`} target='_blank'>
        View File
      </a>
    </>
  );
};

export default UrlDownload;
