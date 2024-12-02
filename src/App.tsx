import Entry from "./components/Entry";
import Header from "./components/Header";
import { entries } from "./data/entries";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col p-4 my-2 md:p-0 md:items-center md:my-5">
        {entries.map((entry) => (
          <Entry key={entry.id} {...entry} />
        ))}
      </main>
    </>
  );
}

export default App;
