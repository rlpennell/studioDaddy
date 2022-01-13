import React, { useEffect, useState } from 'react'
import { studioClient } from '../../src/utils/studioClient'

const UrlDownload = props => {
  const [link, setLink] = useState()

  useEffect(() => {
    const getLink = async () => {
      const assetLink = await studioClient.fetch(`*[_id == $id][0].url`, { id: props.parent.file.asset._ref})
      setLink(assetLink)
    }

    getLink()
  }, [])

  return (
    <>
    <p>Download File</p>
    <a 
      href={`${link}`} 
      target="_blank"
    >
      {link}
    </a>
    </>
  )
}

export default UrlDownload