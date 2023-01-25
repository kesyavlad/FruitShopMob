import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgUp = (props: SvgProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m18 15.5-6-6-6 6"
      stroke="#F1C40F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgUp;
