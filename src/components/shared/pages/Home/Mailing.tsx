const Mailing = () => {
  return (
    <div className="container mt-20 relative ">

      <div className="flex items-center gap-14 relative z-10 flex-col lg:flex-row">
        <div>
          <img src="/mailing.webp" alt="Mailing" />
        </div>
        <div className=" lg:max-w-[530px]">
          <h4 className="text-3xl md:text-5xl">Подпишитесь на рассылку</h4>
          <p className="text-lg md:text-xl text-[#5a5a5a] mt-4">
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
