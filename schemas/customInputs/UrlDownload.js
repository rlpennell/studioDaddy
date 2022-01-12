import React, { useEffect, useState } from 'react'
import sanityClient from "part:@sanity/base/client"

const client = sanityClient.withConfig({apiVersion: '2021-03-25'})

const UrlDownload = props => {
  const [link, setLink] = useState()

  useEffect(() => {
    const getLink = async () => {
      const assetLink = await client.fetch(`*[_id == $id][0].url`, { id: props.parent.file.asset._ref})
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