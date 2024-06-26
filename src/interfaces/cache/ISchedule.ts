type IHour = {
    hour: string,
    activity: string,
}

type IChronogram = IHour[]

interface ISchedule {
    sunday: IChronogram[],
    monday: IChronogram[],
    tuesday: IChronogram[],
    wednesday: IChronogram[],
    thursday: IChronogram[],
    friday: IChronogram[],
    saturday: IChronogram[],
}

export default ISchedule;