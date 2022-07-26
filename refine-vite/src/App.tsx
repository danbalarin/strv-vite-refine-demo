import { Refine } from "@pankod/refine-core";
import {
	notificationProvider,
	Layout,
	ReadyPage,
	ErrorComponent,
} from "@pankod/refine-antd";
import {} from "@pankod/refine-kbar";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import "./styles/antd.less";
import { PostList, PostCreate, PostEdit, PostShow } from "./pages/posts";
import { OffLayoutArea } from "./components/offLayoutArea";

function App() {
	return (
		<RefineKbarProvider>
			<Refine
				notificationProvider={notificationProvider}
				Layout={Layout}
				ReadyPage={ReadyPage}
				catchAll={<ErrorComponent />}
				routerProvider={routerProvider}
				dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
				resources={[
					{
						name: "posts",
						list: PostList,
						create: PostCreate,
						edit: PostEdit,
						show: PostShow,
					},
				]}
				OffLayoutArea={OffLayoutArea}
			/>
		</RefineKbarProvider>
	);
}

export default App;
