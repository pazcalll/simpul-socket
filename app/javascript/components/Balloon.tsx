export default function Balloon({ sender, message, formattedDate, isRTL=false }: { sender: string; message: string, formattedDate: string, isRTL?: boolean }) {
  return (
    <div className={`flex flex-col ${isRTL ? 'items-start' : 'items-end'} my-6`}>
      <span className="text-sm font-bold">{sender}</span>
      <div className={`${isRTL ? 'bg-gray-300' : 'bg-green-200'} rounded-lg p-2 mt-1 max-w-[80%]`}>
        <p>{message}</p>
      </div>
      <span className="text-sm text-gray-300">{formattedDate}</span>
    </div>
  );
}
