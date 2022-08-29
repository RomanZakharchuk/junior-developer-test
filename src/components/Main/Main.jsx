import { MainAbout1, MainAbout2, MainComments, MainForm, MainGraphs, MainPartners, MainVideo } from '../../components';

const Main = () => {
    return (
        <main>
            <MainAbout1 />
            <MainVideo />
            <MainGraphs />
            <MainAbout2 />
            <MainComments />
            <MainPartners />
            <MainForm />
        </main>
    )
}

export { Main };