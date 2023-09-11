import SimpleLineChart from '@/pages/dashboard/components/SimpleLineChart'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Dashboard () {
  return (
    <main className="w-100 bg-[#393E65] rounded-md flex-grow mt-12 flex flex-col p-10 dark:bg-[#2f2b3a]">
      <div className="mb-10 flex">
        <Avatar className="mr-10">
          <AvatarImage src="https://github.com/mauriciotamez.png" />
          <AvatarFallback>MT</AvatarFallback>
        </Avatar>
        <h2 className="flex justify-center items-center text-xl text-white">
          UV-PV Data
          <span className="flex justify-center items-center text-xs ml-4">Q4</span>
        </h2>
      </div>
      <div>
        <SimpleLineChart />
      </div>
    </main>
  )
}
