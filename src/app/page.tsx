import Image from 'next/image'
import Container from '../components/common/Container'
import Hero from '../components/Landing/Hero'
import ProjectCard from '../components/Landing/Projects'
import Blog from '../components/Landing/Blogs'

export default function Home() {
  return (
    <Container className='mt-15'>
      <Hero />
      <ProjectCard />
      <Blog />
    </Container>
  )
}
