import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgHome = (props: SvgProps) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.25 12.75 17 2.833l12.75 9.917v15.583a2.833 2.833 0 0 1-2.833 2.834H7.083a2.834 2.834 0 0 1-2.833-2.834V12.75Z"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.75 31.167V17h8.5v14.167"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgHome;
