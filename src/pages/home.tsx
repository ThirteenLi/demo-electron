import { useLayoutEffect } from "react";

function Home() {
  console.log(window.myApi);
  const { node, chrome, electron } = window.versions;
  const { ping, close } = window.func;

  const init = () => {};
  useLayoutEffect(() => {
    init();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center bg-[#6cf] h-[100vh] p-10">
      <div
        className="fixed right-2 top-2 cursor-pointer hover:underline"
        onClick={close}
      >
        close
      </div>
      <h1 className="text-red-500">💖💖💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>
      <p>Node:{node}</p>
      <p>Chrome:{chrome}</p>
      <p>Electron:{electron}</p>
      <button
        onClick={async () => {
          const res = await ping();
          console.log(res);
          alert(res);
        }}
      >
        点击ping
      </button>
    </div>
  );
}

export default Home;
