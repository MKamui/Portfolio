import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mario Franco | Full Stack Developer</title>
        <meta name="description" content="An analytic Full Stack Web developer from Colombia" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
