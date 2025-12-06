import Data from '@/app/base-falsa'
import { projectData } from '@/app/watch-data'
import SideVideo from '@/components/YoutubeUI/SideVideo'
import SideVideosSection from '@/components/YoutubeUI/SideVideosSection'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        {children}
        
    <SideVideosSection>
        {/* {projectData
          .filter((project) => project.id !== 309)
          .map((project, i) => (
            <SideVideo
              key={i}
              title={project.title}
              href={`/project/${project.id}`}
              thumbnail={project.thumbnail!}
              author="Loops"
              date={project.date}
            />
          ))} */}

        {/* <h2>cancioens::</h2> */}
        {Data.musica.map((props, i) => (
          <SideVideo
            key={i}
            title={props.titulo}
            href={`/video/${URL.parse(props.url)?.searchParams.get("v")}`}
            thumbnail={props.thumbnail}
            author={props.channel.name}
            date={""}
          />
        ))}
        {Data.games.map((props, i) => (
          <SideVideo
            key={i}
            title={props.title}
            href={`/games/${encodeURIComponent(props.url)}`}
            thumbnail={props.thumnbail}
            author="nose"
            date={""}
          />
        ))}
      </SideVideosSection>
    </>
  )
}

export default layout