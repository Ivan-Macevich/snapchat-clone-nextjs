import { ChatSideBar } from "src/components/chat/chatside-bar";

const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<main className='flex h-screen'>
			<ChatSideBar />
			{children}
		</main>
	);
};
export default Layout;