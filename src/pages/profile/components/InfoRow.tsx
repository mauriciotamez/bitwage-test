interface InfoRowProps {
  label: string
  content: string
}

function InfoRow ({ label, content }: InfoRowProps) {
  return (
    <div className="text-lg text-white flex flex-col sm:flex-row justify-between w-full mt-4">
      <div className="flex sm:justify-center items-center text-[#393E65] dark:text-slate-300 font-medium">{label}</div>
      <div className="text-[#393E65] dark:text-slate-300">{content}</div>
    </div>
  )
}

export default InfoRow
