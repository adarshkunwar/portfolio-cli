import Directory from "./assets/created/directory";
import File from "./assets/created/file";

function App() {
  return (
    <>
      <div className="grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid gap-5">
        <File name="Alex" />
        <Directory name="Alex" />
        <Directory name="Alex" />
        <Directory name="Alex" />
        <Directory name="Alex" />
        <File name="Alex" />
        <File name="Alex" />
        <File name="Alex" />
        <File name="Alex" />
        <File name="Alex" />
      </div>
    </>
  );
}

export default App;
