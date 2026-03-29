"use client"

import Script from 'next/script'

export default function VboutContactForm() {
  return (
    <>
      <Script
        src="https://www.vbt.io/ext/vbtforms.js?lang=en"
        strategy="lazyOnload"
        charSet="utf-8"
      />
      <div id="vbtEFWrapper-99440">
        <div
          className="vboutEmbedFormBox"
          id="vboutEmbedFormBox-99440"
          data-vbtfc="6653b4990831a2a6743fa18fe7046ed1"
        />
      </div>
    </>
  )
}
