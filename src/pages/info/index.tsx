import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Index() {
  return (
    <main>
      <Header />
      <Navigation />

      <section className="flex justify-center my-10 mx-3">
        <div className="flex flex-col items-center max-w-[350px] w-full gap-5">
          <div className="w-full bg-zinc-800 p-5 flex flex-col gap-3 rounded-xl">
            <div className="flex justify-between w-full">
              <div>Facebook</div>
              <a
                href="https://www.facebook.com/dadoexpres.bj"
                className="underline hover:text-zinc-400"
                target="_blank"
              >
                Gift Shop BJ
              </a>
            </div>

            <div className="flex justify-between w-full">
              <div>Telefon</div>
              <div className="text-right">043 410 112</div>
            </div>
          </div>

          <div className="w-full bg-zinc-800 p-5 rounded-xl">
            <h2 className="mb-2">Radno Vrijeme</h2>
            <div>
              <div>Ponedjeljak - Petak</div>
              <div className="font-bold mb-4">08:00 - 17:00</div>
              <div>Subota</div>
              <div className="font-bold mb-4">09:00 - 13:00 </div>
              <div>Nedjelja</div>
              <div className="font-bold mb-4">Zatvoreno</div>
            </div>
            <div className="mt-4 text-zinc-400 text-sm">
              Pauza od 1h za vrijeme ručka.
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center mb-20 mx-3">
        <div className="max-w-[800px] w-full my-7">
          <h2 className="mb-2">Lokacija</h2>
          <div>Ul. Augusta Šenoe 25, 43000, Bjelovar</div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5552.912815540062!2d16.840591!3d45.902184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476637f0b7ed6371%3A0xa88bc1528a6912ec!2sGift%20Shop%20-%20DadoExpres%20obrt%20za%20trgovinu!5e0!3m2!1shr!2shr!4v1705835485225!5m2!1shr!2shr"
          height="450"
          className="max-w-[800px] w-full"
          //   style="border:0;"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
