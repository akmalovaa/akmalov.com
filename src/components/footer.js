import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear()
  // const { biolinkUrl } = useSiteMetadata()

  return (
    <footer className="mt-4 flex items-center justify-center gap-2 bg-surface py-6 shadow-inner">
      <div>© {year}</div>
      {/* <a href={biolinkUrl} className="!no-underline">
        Stephen Cavender
      </a> */}
      <h2 className="text-2xl font-bold">
        Footer
      </h2>
      {/* <Ichthys alt="ichthys" className="w-8" /> */}
    </footer>
  )
}

export default Footer
