"use client"

const scripts = [
  {
    name: "Script 1",
    description: "This is a description of Script 1.",
    executor: "Solara",
    link: "https://example.com/script1",
  },
  {
    name: "Script 2",
    description: "This is a description of Script 2.",
    executor: "Solara",
    link: "https://example.com/script2",
  },
  {
    name: "Script 3",
    description: "This is a description of Script 3.",
    executor: "Solara",
    link: "https://example.com/script3",
  },
]

const executors = [
  {
    name: "Solara",
    description: "This is a description of Solara.",
    link: "https://example.com/solara",
  },
]

const ScriptCard = ({ script }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">{script.name}</h3>
      <p className="text-gray-600">{script.description}</p>
      <p className="text-blue-500 mt-2">Executor: {script.executor}</p>
      <a
        href={script.link}
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Script
      </a>
    </div>
  )
}

const ExecutorCard = ({ executor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">{executor.name}</h3>
      <p className="text-gray-600">{executor.description}</p>
      <a
        href={executor.link}
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    </div>
  )
}

const RobloxCheatsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Roblox Cheats</h1>

      <h2 className="text-xl font-semibold mb-2">Executors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {executors.map((executor) => (
          <ExecutorCard key={executor.name} executor={executor} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Scripts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scripts.map((script) => (
          <ScriptCard key={script.name} script={script} />
        ))}
      </div>
    </div>
  )
}

export default RobloxCheatsPage
