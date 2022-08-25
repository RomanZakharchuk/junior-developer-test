import { MainAbout1, MainAbout2, MainComments, MainForm, MainGraph, MainPartners, MainVideo } from '../../components';

const Main = () => {
    return (
        <main>
            <MainAbout1 />
            <MainVideo />
            <MainGraph />
            <MainAbout2 />
            <MainComments />
            <MainPartners />
            <MainForm />
        </main>
    )
}

export { Main };