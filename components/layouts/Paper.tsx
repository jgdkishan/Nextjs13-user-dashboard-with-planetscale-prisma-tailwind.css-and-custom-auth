import type { ReactNode } from 'react'

const Paper = ({
  children,
  paperTitle,
  sort
}: {
  children: ReactNode
  paperTitle: string
  sort: string[] | null
}) => {
  return (
    <div className="py-4 m-5 overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-4">
      <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">{paperTitle}</p>

          {sort && sort.length > 0 && (
            <div className="inline-flex items-center justify-end">
              <label className="text-sm font-medium text-gray-900">
                {' '}
                Sort:{' '}
              </label>
              <select
                id="sort"
                name="sort"
                className="block w-full py-2 pl-1 pr-10 text-base border-gray-300 border-none rounded-lg focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
              >
                {sort.map((field, index) => (
                  <option value={field} key={index}>
                    {field}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default Paper
