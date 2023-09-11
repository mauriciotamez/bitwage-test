import {
  Table as TableShadCN,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import tableData from '@/utils/table-data'

const data = tableData

export default function Table () {
  return (
    <main className="w-100 bg-[#393E65] rounded-md flex-grow mt-12 flex flex-col p-10 dark:bg-[#2f2b3a]">
      <div className="mb-10 flex">
        <TableShadCN>
          <TableCaption>PV and UV Data</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-[#FFFFFF]">{item.id}</TableCell>
                <TableCell className="text-[#FFFFFF]">{item.status}</TableCell>
                <TableCell className="text-[#FFFFFF]">{item.method}</TableCell>
                <TableCell className="text-right text-[#FFFFFF]">{`$${item.amount.toFixed(2)}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableShadCN>
      </div>
    </main>
  )
}
