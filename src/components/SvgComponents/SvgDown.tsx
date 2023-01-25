import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgDown = (props: SvgProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m6 9.5 6 6 6-6"
      stroke="#F1C40F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgDown;
