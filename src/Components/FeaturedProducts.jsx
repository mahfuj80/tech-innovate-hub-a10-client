const FeaturedProducts = () => {
  return (
    <div>
      <section className="bg-[#F3F4F6] dark:bg-black px-8 pt-20 pb-10 lg:pt-[100px] lg:pb-20">
        <h2 className="text-center text-4xl pb-16 font-bold">
          Featured Products
        </h2>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
              <div className="mb-10 overflow-hidden rounded-lg bg-white hover:shadow-2xl hover:shadow-white">
                <img
                  src="/apple-air-tag.png"
                  alt="image"
                  className="h-64 w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a className="cursor-pointer mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                      Track with Precision: Apple AirTag Spotlight!
                    </a>
                  </h3>
                  <p className="mb-7 text-base leading-relaxed text-body-color">
                    Never lose your valuables again. Apple AirTag provides
                    accurate tracking, seamless integration, and peace of mind
                    for your belongings
                  </p>

                  <a className="cursor-pointer inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg bg-white  hover:shadow-2xl hover:shadow-white">
                <img
                  src="/sony-ear-buds.png"
                  alt="image"
                  className="h-64 w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a className="cursor-pointer mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                      Immerse in Sound: Sony AirPod Experience!
                    </a>
                  </h3>
                  <p className="mb-7 text-base leading-relaxed text-body-color">
                    Elevate your audio experience with Sony AirPods. Enjoy
                    superior sound quality, comfort, and wireless convenience
                    for a music-filled day.
                  </p>

                  <a className="cursor-pointer inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg bg-white  hover:shadow-2xl hover:shadow-white">
                <img
                  src="/asus-zenbook.png"
                  alt="image"
                  className="h-64 w-full bg-gray-100"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a className="cursor-pointer mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                      Powerful & Elegant: Discover Asus ZenBook Pro!
                    </a>
                  </h3>
                  <p className="mb-7 text-base leading-relaxed text-body-color">
                    Unleash productivity with Asus ZenBook Pro. Combining power,
                    style, and innovation for a seamless computing experience
                    wherever you go
                  </p>

                  <a className="cursor-pointer inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
