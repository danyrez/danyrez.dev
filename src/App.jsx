import Navbar from './components/navbar'
import Projects from './components/projects'
import Experience from './components/experience'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="container mx-auto pt-25 md:px-80">
          <section className="py-4 flex flex-col space-y-4 delay-100 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
            <p className="leading-loose">
              Hi, I'm{' '}
              <span className="font-bold tracking-tight">Dante Rodríguez</span>,
              a passionate fullstack web developer from Peru. I specialize in
              creating robust databases, designing user-friendly interfaces, and
              contributing to open source projects. Let's build something
              amazing together!
            </p>
          </section>
          <section className="py-4 flex flex-col space-y-4 delay-100 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-xl font-medium">Projects</h2>
            </div>
            <div>
              <Projects />
            </div>
          </section>
          <section className="py-4 flex flex-col space-y-4 delay-100 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-xl font-medium">Experience</h2>
            </div>
            <div>
              <Experience />
            </div>
          </section>
        </div>
        <footer className="py-4 text-center dark:bg-neutral-900 bg-neutral-50">
          <h1>👋 Building amazing apps</h1>
          <h2>Dante Rodríguez - 2025</h2>
        </footer>
      </main>
    </>
  )
}

export default App
