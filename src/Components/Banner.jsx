const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(/background.png)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome To Tech Innovative Hub
            </h1>
            <p className="mb-5">
              Tech Innovative Hub is your gateway to the latest in technology
              and electronics, featuring a diverse range of cutting-edge
              products, innovation, and insights to empower your digital
              lifestyle
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
