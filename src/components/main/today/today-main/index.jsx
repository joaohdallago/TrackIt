import TodayMainHeader from "./today-main-header";
import UserTodayHabits from "./user-today-habits";


import ContainerMain from "../../../../theme/containerMain";

const TodayMain = () => {
    return (
        <ContainerMain>
            <TodayMainHeader />
            <UserTodayHabits />
        </ContainerMain>
    )
};

export default TodayMain;