export default function Home() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-[#00C896]/10 border border-[#00C896]/20 text-[#00C896] px-4 py-2 rounded-full text-sm mb-8">
          <span className="w-2 h-2 bg-[#00C896] rounded-full inline-block"></span>
          O'zbek tilida · Bepul · Amaliy
        </div>

        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Sun'iy intellektni <br />
          <span className="text-[#00C896]">o'zbek tilida</span> o'rganing
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          ChatGPT, Claude, Midjourney va boshqa AI vositalarni o'zbek tilida o'rganing.
        </p>

        <button className="bg-[#00C896] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#00b085] transition-colors">
          Bepul boshlash →
        </button>
      </div>
    </main>
  );
}