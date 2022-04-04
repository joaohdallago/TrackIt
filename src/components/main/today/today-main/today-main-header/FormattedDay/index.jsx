import dayjs from 'dayjs';

const FormattedDay = () => {
    return (
        <h2>{formattedDay()}</h2>
    )
};

const formattedDay = () => {
    const portugueseDaysOfTheWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dayOfTheWeek = dayjs().format('d');
    const portugueseDayofTheWeek = portugueseDaysOfTheWeek[dayOfTheWeek];

    const date = dayjs().format('DD/MM');

    return `${portugueseDayofTheWeek}, ${date}`
}

export default FormattedDay;