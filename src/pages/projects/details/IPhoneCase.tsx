import { css } from "@emotion/css";
import { BaseComponentProps } from "components/BaseComponent";
import React from "react";

type Props = {} & BaseComponentProps;

export default function IPhoneCase({ children }: Props) {
  return (
    <div id="iphone" className={iphoneCSS}>
      <div
        id="iphone-top"
        className={css`
          padding: 5px 110px 40px;
          position: relative;
        `}
      >
        <span id="camera" className={cameraCSS}></span>
        <span id="sensor" className={sensorCSS}></span>
        <span id="speaker" className={speakerCSS}></span>
      </div>
      <div
        id="top-bar"
        className={css`
          ${topbarBottombarCSS}
          top: 65px;
        `}
      ></div>
      <div id="iphone-screen" className={iphoneScreenCSS}>
        {children}
      </div>
      <div id="buttons" className="buttons">
        <span
          id="on-off"
          className={css`
            ${onOffUpDownSleepCSS}
            ${onOffCSS}
          `}
        ></span>
        <span
          id="sleep"
          className={css`
            ${onOffUpDownSleepCSS}
            ${upDownSleepCSS}
            ${sleepCSS}
          `}
        ></span>
        <span
          id="up"
          className={css`
            ${onOffUpDownSleepCSS}
            ${upDownSleepCSS}
            top: 170px;
          `}
        ></span>
        <span
          id="down"
          className={css`
            ${onOffUpDownSleepCSS}
            ${upDownSleepCSS}
            top: 250px;
          `}
        ></span>
      </div>
      <div
        id="bottom-bar"
        className={css`
          ${topbarBottombarCSS}
          bottom: 65px;
        `}
      ></div>
      <div id="iphone-bottom" className={iphoneBottomCSS}>
        <span></span>
      </div>
    </div>
  );
}

const iphoneCSS = css`
  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #999,
    0 0 30px 0px rgba(0, 0, 0, 0.7);
  border: 5px solid #d9dbdc;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 50px;
  height: 88%;
  aspect-ratio: 9/19.5;
  position: relative;
  margin: 0 auto;
`;

const speakerCSS = css`
  display: block;
  width: 56px;
  height: 5px;
  margin: 0 auto 0 -8px;
  border-radius: 6px;
  background: #292728;
`;

const cameraCSS = css`
  display: block;
  margin: 0 auto;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-bottom: 13px;
  background: #333;
`;

const sensorCSS = css`
  display: block;
  width: 12px;
  height: 12px;
  float: left;
  background: #333;
  margin-top: -5px;
  margin-left: -40px;
  border-radius: 50%;
`;

const iphoneScreenCSS = css`
  background: #eee;
  border: 1px solid #fff;
  height: 82%;
  aspect-ratio: 9/16;
  margin: -20px auto 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const onOffUpDownSleepCSS = css`
  display: block;
  background: #ccc;
  position: absolute;
  border-radius: 2px 0px 0px 2px;
`;
const onOffCSS = css`
  height: 40px;
  width: 3px;
  top: 100px;
  left: -8px;
`;
const upDownSleepCSS = css`
  height: 60px;
  width: 5px;
  left: -10px;
`;
const sleepCSS = css`
  left: auto;
  right: -10px;
  top: 170px;
  border-radius: 0px 2px 2px 0px;
`;
const topbarBottombarCSS = css`
  display: block;
  width: 100%;
  height: 15px;
  border: {
    left: 5px solid #bbb;
    right: 5px solid #bbb;
  }
  position: absolute;
  left: -5px;
`;
const iphoneBottomCSS = css`
  padding: 10px 0 0;
  span {
    display: block;
    margin: 0 auto;
    width: 48px;
    height: 48px;
    background: #ccc;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      #303233 0%,
      #b5b7b9 50%,
      #f0f2f2 69%,
      #303233 100%
    );
    position: relative;
    &:after {
      content: "";
      display: block;
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      left: 4px;
      top: 4px;
    }
  }
`;
