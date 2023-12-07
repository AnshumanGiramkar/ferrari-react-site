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
      {/* <section className="section">
        <ImageBackgroundNoText backgroundImage={teslaChargerImage} />
      </section>
      <section className="section">
        <ImageGrid
          image1={cybertruckImage}
          image2={teslaChargerImage}
          text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
      </section> */}
    </div>
  );
}
