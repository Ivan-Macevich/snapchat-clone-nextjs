import { auth } from "src/auth";
import Chat from "./chat";
import { getUsersForSidebar } from "src/lib/data";

const Chats = async () => {
  const session = await auth();
  const chats = session?.user ? await getUsersForSidebar(session.user._id) : [];
  return (
    <nav className="flex-1 overflow-y-auto">
      @
      <ul>
        {chats.map((chat: any) => (
          <Chat key={chat._id} chat={chat} />
        ))}
      </ul>
    </nav>
  );
};
export default Chats;
