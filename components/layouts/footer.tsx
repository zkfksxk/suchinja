export const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center justify-center gap-4 py-8 text-center bg-gray-300 print:hidden'>
      <div>
        © {`${new Date().getFullYear()} `}
        <span className='font-semibold'>Karanta</span> all rights reserved.
      </div>
    </footer>
  );
};
