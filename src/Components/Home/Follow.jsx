const Follow = () => {
  return (
    <>
      <section className="bg-black">
        <div className="bg">
          <div className=" container mx-auto px-6 py-20 max-w-[1300px] w-full">
            <div className="grid mx-auto w-full place-items-center gap-6 lg:gap-8">
              <div className=" text-white space-y-7 text-center">
                <h1 className="text-3xl lg:text-5xl font-roboto font-semibold">
                  Follow us
                </h1>
                <h2 className="text-lg lg:text-2xl font-inter font-semibold">
                  Join our socials for latest updates regarding art
                </h2>
              </div>
              <div className="flex gap-6 items-center my-6 lg:my-16 lg:gap-10">
                <a href="https://wa.me/message/UKCGXKH7KKL6H1">
                  <img
                    className="max-w-[40px] lg:max-w-[60px]"
                    src="WhatsApp.svg"
                  />
                </a>
                <a href="https://youtube.com/@shreecrafteria27?si=g8xeriHm7cdtn2D9">
                  <img
                    className="max-w-[40px] lg:max-w-[60px]"
                    src="YouTube.svg"
                  />
                </a>
                <a href="https://www.instagram.com/shree.crafteria27?igsh=MWljMXFqbG1laWsyMQ%3D%3D&utm_source=qr">
                  <img
                    className="max-w-[40px] lg:max-w-[60px]"
                    src="Instagram.svg"
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61560058480732&mibextid=LQQJ4d">
                  <img
                    className="max-w-[40px] lg:max-w-[60px]"
                    src="Facebook.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Follow;
