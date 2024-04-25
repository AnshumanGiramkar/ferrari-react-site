import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import ferrariGTB from '../assets/ferrari_296_gtb.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import teslaChargerImage from '../assets/tesla-charger.jpg';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
];

export default function FerrariGTB() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Ferrari 296 GTB"
          description=" 818 horsepower plug-in hybrid powertrain, speed of over 330 km/h"
          backgroundImage={ferrariGTB}
          featureItems={featureItems}
        />
      </section>
    </div>
  );
}
