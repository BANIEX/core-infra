import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



const complaints = [
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
  {
    accountNumber: "0123456789",
    customerName: "Nazeer Ajibola",
    submissionDate: "2024-11-14T10:27:43",
    category: "Card Dispute",
  },
];


export function LogTable() {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow className="divide-x divide-gray-200">
          <TableHead
            className=" border-gray-200 
          text-lapo-text-secondary font-medium"
          >
            Account Number
          </TableHead>
          <TableHead className="  border-gray-200 text-center text-lapo-text-secondary font-medium">
            Customer Name
          </TableHead>
          <TableHead className=" border-gray-200 text-center text-lapo-text-secondary font-medium">
            Submission Date
          </TableHead>
          <TableHead className=" border-gray-200 text-center text-lapo-text-secondary font-medium">
            Category
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {complaints.map((complaint, index) => (
          <TableRow
            key={index}
            className="divide-x divide-gray-200 font-normal text-[12px] text-lapo-text-secondary"
          >
            <TableCell className="font-light ">
              {complaint.accountNumber}
            </TableCell>
            <TableCell className="text-center font-normal">
              {complaint.customerName}
            </TableCell>
            <TableCell className="text-center font-normal">
              {complaint.submissionDate}
            </TableCell>
            <TableCell className="text-center font-normal">
              {complaint.category}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Page 1 of 20</TableCell>
          <TableCell className="flex justify-end">
            <button
              type="button"
              className="
                    flex items-center
                    px-3 py-2
                    border border-gray-300
                    rounded-md
                    hover:bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-gray-100
                    transition
                    mr-5
                  "
            >
              <span className="text-gray-700 text-sm">Previous</span>
            </button>
            <button
              type="button"
              className="
                    flex items-center
                    px-3 py-2
                    border border-gray-300
                    rounded-md
                    hover:bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-gray-100
                    transition
                  "
            >
              <span className="text-gray-700 text-sm">Next</span>
            </button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
