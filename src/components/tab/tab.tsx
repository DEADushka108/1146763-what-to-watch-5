import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Tab = (props: Props) => {
  const {children} = props;

  return <React.Fragment>{children}</React.Fragment>;
};

export default Tab;
