import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import sf90Spider from '../assets/ferrari_sf90_spider.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import teslaChargerImage from '../assets/tesla-charger.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
];

export default function SF90Spider() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Ferrari SF90 Spider"
          description=" 986 horsepower plug-in hybrid powertrain, speed of over 340 km/h"
          backgroundImage={sf90Spider}
          featureItems={featureItems}
        />
      </section>
    </div>
  );
}
