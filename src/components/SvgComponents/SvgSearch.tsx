import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgSearch = (props: SvgProps) => (
  <Svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.458 19.792a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667ZM21.875 21.875l-4.531-4.531"
      stroke="#F1C40F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSearch;
