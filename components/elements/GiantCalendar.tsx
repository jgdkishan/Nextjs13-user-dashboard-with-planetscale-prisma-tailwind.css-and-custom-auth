import { Calendar } from '@mantine/dates'
import { CalendarInput } from '../../types'

const GiantCalendar = ({
  label,
  formInput,
  error
}: {
  label: string
  formInput: CalendarInput
  error: string | null
}) => {
  return (
    <div className="py-10">
      <label className="block text-sm mb-4 font-medium text-gray-600">
        {' ' + label + ' '}
      </label>
      <Calendar
        fullWidth
        size="xl"
        className="max-w-sm relative mx-auto border block border-gray-300 rounded-lg drop-shadow-md"
        {...formInput}
        styles={(theme) => ({
          cell: {
            border: `1px solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
            }`
          },
          day: {
            borderRadius: 0,
            height: 55,
            fontSize: theme.fontSizes.lg
          },
          weekday: { fontSize: theme.fontSizes.lg },
          weekdayCell: {
            fontSize: theme.fontSizes.xl,
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[0],
            border: `1px solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
            }`,
            height: 55
          }
        })}
      />
      {error && (
        <p className="pl-4 mt-2 text-sm font-medium text-red-500 list-disc list-outside">
          {error}
        </p>
      )}
    </div>
  )
}

export default GiantCalendar
