import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import ferrariGTS from '../assets/ferrari-296-gts.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import teslaChargerImage from '../assets/tesla-charger.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
];

export default function FerrariGTS() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Ferrari 296 GTS"
          description=" 818 horsepower plug-in hybrid powertrain, speed of over 330 km/h"
          backgroundImage={ferrariGTS}
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
