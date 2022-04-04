import UserHabitDay from "./user-habit-day";

const UserHabitDays = ({ days }) => {
    const daysOfTheWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <>
            {
                daysOfTheWeek.map(dayInitial => <UserHabitDay {...{dayInitial}}/>)
            }
        </>
    );
};

export default UserHabitDays;