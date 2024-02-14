import Header from "./components/header";
import { BasePath } from "../config";
export default function Home() {
    return <>
        <Header />
        <img src={BasePath + "/tombstone.png"}/>
    </>;
}
