import { useParams } from 'react-router-dom';
import { Carousel } from 'react-carousel-minimal';
import { useEffect, useState } from 'react';

const BrandProduct = () => {
  const { name } = useParams();
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/banners')
      .then((res) => res.json())
      .then((fetchedBanners) => {
        // Filter banners based on the provided name
        const filteredBanners = fetchedBanners.filter(
          (banner) => banner.name.toLowerCase() === name.toLowerCase()
        );
        setBanners(filteredBanners);
      });
    console.log('ys');
  }, [name]);
  console.log('ys');
  const data = banners.map((banner) => ({
    image: banner.image,
    caption: banner.caption,
  }));

  const captionStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
  };

  return (
    <div className="App overflow-hidden ">
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 auto',
          }}
        >
          <Carousel
            data={data}
            time={3000}
            width="full"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              minWidth: 'full',
              maxHeight: '500px',
              margin: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
