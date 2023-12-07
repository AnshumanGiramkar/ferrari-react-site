import HomeSectionVideo from '../components/HomeSectionVideo/HomeSectionVideo';
import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import ferrariGTB from '../assets/ferrari_296_gtb.jpg';
import ferrariGTS from '../assets/ferrari-296-gts.jpg';
import sf90Stradale from '../assets/ferrari_sf90_stradale.jpg';
import sf90Spider from '../assets/ferrari_sf90_spider.jpg';

export default function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <HomeSectionVideo />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Ferrari 296 GTB"
          description="View inventory"
          backgroundImage={ferrariGTB}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Ferrari 296 GTS"
          description="View inventory"
          backgroundImage={ferrariGTS}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Ferrari SF90 Stradale"
          description="View inventory"
          backgroundImage={sf90Stradale}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Ferrari SF90 Spider"
          description="View inventory"
          backgroundImage={sf90Spider}
        />
      </section>
    </div>
  );
}
