const InteractiveButtons = () => {
  return (
    <div className="flex sm:grid grid-cols-2 xl:flex items-center gap-2 md:gap-5 mt-5">
      <button className="col-span-2 xl:col-span-1 bg-[#1a1a1a] text-white py-2 px-2 md:px-10  h-14 hover:opacity-80 ">
        Добавить в корзину
      </button>
      <button className="bg-[#1a1a1a] text-white p-4 h-14 hover:opacity-80 flex items-center justify-center">
        <img src="/heart-white.svg" alt="Favorite" />
      </button>
      <button className="bg-[#1a1a1a] text-white p-4 h-14 hover:opacity-80 flex items-center justify-center">
        <img src="/compare.svg" alt="Compare" />
      </button>
    </div>
  );
};

export default InteractiveButtons;
