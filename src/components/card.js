import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Card = ({ link, title, thumbnail, date, excerpt }) => {
  return (
    <article className="rounded bg-surface shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-accent/30">
      <Link to={link} className="block p-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="h-[120px] w-[180px] shrink-0 overflow-hidden rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
            <GatsbyImage alt={title} image={getImage(thumbnail)} />
          </div>
          <div>
            {date && <time className="font-semibold text-accent">{date}</time>}
            <h3 className="!mt-0 text-xl">{title}</h3>
            <p className="text-base text-muted">{excerpt}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Card
