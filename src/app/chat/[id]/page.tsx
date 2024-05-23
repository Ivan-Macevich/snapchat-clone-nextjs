import { auth } from "src/auth";
import ChatMessages from "src/components/chat/chat-messages";
import ChatTopbar from "src/components/chat/chat-topbar";
import SendMsgInput from "src/components/chat/send-msg-input";
import { getMessages } from "src/lib/data";

const ChatHistoryPage = async ({ params }: { params: { id: string } }) => {
	const session = await auth();
	const messages = session ? await getMessages(session?.user?._id, params.id) : [];
	return (
		<div className='bg-sigMain h-screen flex-[3_3_0%] flex flex-col px-4 text-white'>
			{/* topbar */}
			<ChatTopbar params={params} />
			{/* below-topbar section */}
			<div className='bg-sigSurface flex-1 overflow-y-auto rounded-xl my-4 border border-sigColorBgBorder  py-2 px-3 '>
				{/* Message container */}
				<div className='flex flex-col'>
					<ChatMessages messages={messages} session={session} />
				</div>
			</div>
			{/* Input */}
			<SendMsgInput />
		</div>
	);
};
export default ChatHistoryPage;