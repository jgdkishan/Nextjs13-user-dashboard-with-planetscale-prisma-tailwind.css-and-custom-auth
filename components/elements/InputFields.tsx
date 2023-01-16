import { FormInput } from '../../types'

export const TextInputField = ({
  label,
  formInput,
  error,
  Icon
}: {
  label: string
  formInput: FormInput
  error: string | null
  Icon: () => JSX.Element
}) => {
  return (
    <div className="mt-5">
      <label className="block text-sm font-medium text-gray-600">
        {' ' + label + ' '}
      </label>
      <div className="relative mt-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-30">
          <Icon />
        </div>

        <input
          type="text"
          name=""
          id=""
          placeholder={label}
          {...formInput}
          className="border block w-full py-3 pl-12 pr-4 text-gray-500 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm caret-gray-600 drop-shadow-md"
        />
      </div>

      {error && (
        <p className="pl-4 mt-2 text-sm font-medium text-red-500 list-disc list-outside">
          {error}
        </p>
      )}
    </div>
  )
}
