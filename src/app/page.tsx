export default function Home() {
  return (
    <>
      <main className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <section>
          <div className="flex-auto min-w-0 mt-6 flex-col px-2 md:px-0">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Hi, Im Harrison</h1>
            <p className="mb-4">Im a junior developer studying at RMIT, based in Melbourne, Australia</p>
          </div>
        </section>
        <footer className="mb-16">
          <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            <li>
              <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100" href="https://github.com/harrisonablack">
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffffff"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
                <p className="ml-2 h-7">GitHub</p>
              </a>
            </li>
            <li>
              <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                <p className="ml-2 h-7">mail@harrison.black</p>
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}
