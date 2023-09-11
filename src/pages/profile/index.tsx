import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Exchange from '@/assets/exchange.png'
import InfoRow from './components/InfoRow'

export default function Profile () {
  return (
    <main className="w-100 bg-[#393E65] rounded-md flex-grow mt-12 flex flex-row  dark:bg-[#2f2b3a]">
      <div className="text-2xl text-[#393E65] dark:text-white bg-[#cdcad4] dark:bg-[#4e3977] rounded-md sm:rounded-tl-md sm:rounded-bl-md sm:rounded-tr-none sm:rounded-br-none min-w-full sm:min-w-[100%] md:min-w-[50%] lg:min-w-[50%] xl:min-w-[33%] p-10">
        <div className="text-2xl mt-10 font-semibold">Basic info</div>
        <div className="text-lg text-white flex justify-between w-full mt-4">
          <div className="flex justify-center items-center text-slate-700 dark:text-slate-300">Profile Picture</div>
          <div className="">
            <Avatar className="">
              <AvatarImage src="https://github.com/mauriciotamez.png" />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <InfoRow label="Name" content="Mauricio Tamez" />
        <InfoRow label="Birthday" content="April 2, 2000" />
        <InfoRow label="Gender" content="Male" />
        <InfoRow label="Role" content="E-Commerce Admin" />
        <div className="text-2xl mt-10 font-semibold">Contact info</div>
        <InfoRow label="Email" content="oscartamez13@gmail.com" />
        <InfoRow label="Phone" content="81 1999 2063" />
        <div className="text-2xl mt-10 font-semibold">Addresses</div>
        <InfoRow label="Home" content="Earth" />
      </div>
      <div className="w-1/2 flex justify-center items-center flex-grow opacity-20 object-contain">
        <img src={Exchange} alt="" className="max-w-full h-auto" width={600} />
      </div>
    </main>
  )
}
