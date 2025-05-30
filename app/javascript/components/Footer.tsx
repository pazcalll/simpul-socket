export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full mb-5 mt-5">
      <div className="w-full text-xl py-3 mt-5 flex justify-center max-w-[29rem] md:max-w-[42rem] mx-auto">
        {children}
      </div>
    </div>
  );
}
