import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit<T, keyof K>;

export interface InjectedMobileProps {
  isMobile: boolean;
}

interface WithMobileState {
  readonly windowWidth: number;
}

export const withMobile = <P extends InjectedMobileProps>(
  Component: React.ComponentType<P>,
) =>
  class MobileResize extends React.Component<
    Subtract<P, InjectedMobileProps>,
    WithMobileState
  > {
    readonly state: WithMobileState = {
      windowWidth: 0,
    };
    componentDidMount(): void {
      window.addEventListener('resize', this.updateSize);
    }

    componentWillUnmount(): void {
      window.removeEventListener('resize', this.updateSize);
    }

    updateSize = (): void => {
      this.setState({ windowWidth: window.innerWidth });
    };

    render() {
      const { windowWidth } = this.state;
      const { ...restProps } = (this.props as object) as P;
      return <Component {...restProps} isMobile={windowWidth < 800} />;
    }
  };
