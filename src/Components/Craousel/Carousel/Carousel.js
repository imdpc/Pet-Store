import React, { Component, Children, cloneElement } from "react";
import { CarouselContainer, Wrapper, CarouselSlot } from "./style";
import "./style.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      direction: props.children.length === 2 ? "prev" : "next",
      sliding: false,
    };
  }

  getOrder(itemIndex) {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;

    if (numItems === 2) return itemIndex;

    if (itemIndex - position < 0)
      return numItems - Math.abs(itemIndex - position);
    return itemIndex - position;
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position,
    });

    setTimeout(() => {
      this.setState({
        sliding: false,
      });
    }, 50);
  };

  nextSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;

    if (numItems === 2 && position === 1) return;

    this.doSliding("next", position === numItems - 1 ? 0 : position + 1);
  };

  prevSlide = () => {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;

    if (numItems === 2 && position === 0) return;

    this.doSliding("prev", position === 0 ? numItems - 1 : position - 1);
  };

  render() {
    const { children } = this.props;
    const { sliding, direction, position } = this.state;

    const childrenWithProps = Children.map(children, (child) =>
      cloneElement(child, {
        numSlides: children.length || 1,
      })
    );

    return (
      <div>
        <Wrapper>
          <div className="btn-for-andheader-for-in-deasx">
            <div></div>
            <div className="flex-btn-in-next-and-preview-btn">
              <button
                onClick={() => this.prevSlide()}
                className="oiwk-adesf-adcm"
                style={{ marginRight: "1em" }}
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-of-go-in-letd-idbaidjk"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    fill="#007f61"
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M3495 5096 c-40 -19 -276 -250 -1231 -1207 -971 -973 -1184 -1191
-1195 -1224 -22 -64 -17 -172 9 -230 19 -42 220 -247 1190 -1217 1296 -1296
1209 -1218 1347 -1218 105 0 147 25 287 166 136 138 161 182 161 284 0 128 55
67 -1016 1138 l-972 972 976 978 c1082 1083 1015 1007 1013 1142 -1 100 -26
143 -156 275 -136 137 -185 165 -293 165 -53 0 -82 -6 -120 -24z"
                    />
                  </g>
                </svg>
              </button>
              <button
                className="oiwk-adesf-adcm"
                onClick={() => this.nextSlide()}
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-of-go-rightin-wadsfg"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    fill="#007f61"
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M1385 5096 c-70 -33 -276 -243 -306 -311 -30 -67 -30 -163 0 -230 18
-42 180 -208 994 -1023 l972 -972 -976 -978 c-1082 -1082 -1014 -1006 -1014
-1142 1 -100 27 -145 158 -276 136 -136 185 -164 292 -164 53 0 82 6 120 24
40 19 276 250 1231 1207 971 973 1184 1191 1195 1224 22 64 17 172 -9 230 -19
42 -220 247 -1190 1217 -1296 1296 -1209 1218 -1347 1218 -53 0 -82 -6 -120
-24z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <CarouselContainer
            sliding={sliding}
            direction={direction}
            numSlides={childrenWithProps.length}
          >
            {childrenWithProps.map((child, index) => (
              <CarouselSlot
                key={index}
                order={this.getOrder(index)}
                numSlides={childrenWithProps.length}
                position={position}
              >
                {child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
        </Wrapper>
      </div>
    );
  }
}

export default Carousel;
