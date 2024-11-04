const Mailing = () => {
  return (
    <div className="container mt-20 relative ">
      {/* BG */}
      <div className="bg-[#f3f3f3] h-[555px] w-2/3 absolute right-0 -bottom-14" />

      <div className="flex items-center gap-14 relative z-10">
        <div>
          <img src="/mailing.jpg" alt="Mailing" />
        </div>
        <div className="max-w-[530px]">
          <h4 className="text-5xl">Подпишитесь на рассылку</h4>
          <p className="text-xl text-[#5a5a5a] mt-4">
            Узнай первым о старте скидок и специальных предложений!
          </p>
          <form className="mt-4 flex flex-col w-full">
            <input
              className="outline-none text-2xl text-[#9a9a9a] border-b border-b-[#c4c4c4] bg-transparent"
              type="text"
              placeholder="Введите почту"
            />
            <button className="bg-black font-second text-xl text-white py-4 mt-7 rounded hover:opacity-80">
              ПОДПИСАТЬСЯ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mailing;
