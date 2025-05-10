export default function Balloon({ sender, message, isRTL=false }: { sender: string; message: string, isRTL?: boolean }) {
  return (
    <div className={`flex flex-col ${isRTL ? 'items-start' : 'items-end'} my-6`}>
    <span className="text-sm font-bold">{sender}</span>
      <div className="bg-gray-300 rounded-lg p-2 mt-1 max-w-[80%]">
        <p>{message}</p>
      </div>
    </div>
  );
}
