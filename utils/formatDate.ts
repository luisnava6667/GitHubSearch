import dayjs from 'dayjs';
export const joinDate = (dateFormat: string) => {
    const date = dayjs(dateFormat);
    const formatDay = `Joined ${date.format('DD/MM/YYYY')}`;
    return formatDay;
}