import clsx from 'clsx';

export default function IncorrectInput({ customerId, amount, status }: {
    customerId?: string | null,
    amount?: string | null,
    status? : string | null,
}) {
    console.log(status);
    return (
        <div
        className={clsx(
          "text-red-500 text-center font-medium absolute left-1/2 transform -translate-x-1/2 p-4 bg-red-100 rounded-md shadow-md",
          { hidden: (status !== null || status === "start") &&
                    (customerId !== null || customerId === "start") &&
                    (amount !== null || amount === "start")
           }
        )}
      >
        Please Select: 
            { (customerId === null || customerId === "start") ?  <p> Customer Name</p> : null }
            { (amount === null || amount === "start") ?  <p> Amount</p> : null }
            { (status === null || status === "start") ?  <p> Status</p> : null }
      </div>
      
    );
}