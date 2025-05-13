import Canvus from "./components/canvus";
import Chat from "./components/chat";
import Colorbox from "./components/colorbox";
import UsersList from "./components/users";

function GamePage() {
  return (
    <div className="flex flex-row h-screen w-screen border-2 p-8 gap-2">
      <UsersList />
      <div className="w-full flex flex-col gap-2">
        <Canvus />
        <Colorbox />
      </div>
      <Chat />
    </div>
  );
}

export default GamePage;
