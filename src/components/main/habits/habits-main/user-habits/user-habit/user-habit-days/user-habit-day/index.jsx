import ContainerDayOfTheWeek from '../../../../../../../../theme/containerDayOfTheWeek'

const UserHabitDay = ({ dayInitial, index, days }) => {
    const isChecked = days.includes(index)

    return (
        <ContainerDayOfTheWeek {...{isChecked}}>
            {dayInitial}
        </ContainerDayOfTheWeek>
    )
};

export default UserHabitDay;